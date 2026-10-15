import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import sharp from 'sharp';
import { z } from 'zod';

/*
 * News posts: one MDX file per post in content/aktualnosci/<slug>.mdx,
 * photos in public/aktualnosci/<slug>/ (cover.jpg + any other photos).
 * Frontmatter is validated here, so a missing field or photo stops the build
 * with a message naming the file instead of publishing a broken page.
 */

export const NEWS_DIR = path.join(process.cwd(), 'content', 'aktualnosci');
const PUBLIC_DIR = path.join(process.cwd(), 'public', 'aktualnosci');

// "Akademia betonu" — guides and practical tips (how to pour, cure and protect concrete).
export const categories = ['Firma', 'Infrastruktura', 'Wydarzenia', 'Sponsoring', 'Akademia betonu'] as const;
export type Category = (typeof categories)[number];

const isoDate = z
  .union([z.string(), z.date()])
  .transform((value) => (value instanceof Date ? value.toISOString().slice(0, 10) : value))
  .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), 'data w formacie RRRR-MM-DD, np. 2026-06-07');

const frontmatterSchema = z.object({
  title: z.string().min(1, 'tytuł jest wymagany'),
  date: isoDate,
  description: z.string().min(1, 'opis (description) jest wymagany'),
  category: z.enum(categories, { errorMap: () => ({ message: `kategoria: ${categories.join(', ')}` }) }),
  cover: z.string().default('cover.jpg'),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});

export type NewsPost = z.infer<typeof frontmatterSchema> & {
  slug: string;
  body: string;
  coverSrc: string;
  readingMinutes: number;
};

const imagePattern = /\.(jpe?g|png|webp|avif)$/i;

/** Public URL of a file in the post's photo folder. Absolute paths and URLs pass through. */
export function postAsset(slug: string, file: string) {
  if (file.startsWith('/') || /^https?:\/\//.test(file)) return file;
  return `/aktualnosci/${slug}/${file}`;
}

function readPost(file: string): NewsPost {
  const slug = file.replace(/\.mdx$/, '');
  const raw = fs.readFileSync(path.join(NEWS_DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    const problems = parsed.error.issues.map((issue) => `  - ${issue.path.join('.') || 'frontmatter'}: ${issue.message}`);
    throw new Error(`Aktualność "content/aktualnosci/${file}" ma błędy:\n${problems.join('\n')}`);
  }

  const post = parsed.data;
  const coverSrc = postAsset(slug, post.cover);
  if (coverSrc.startsWith('/aktualnosci/') && !fs.existsSync(path.join(process.cwd(), 'public', coverSrc))) {
    throw new Error(`Aktualność "content/aktualnosci/${file}": brak zdjęcia okładki public${coverSrc}`);
  }

  const words = content.split(/\s+/).filter(Boolean).length;
  return { ...post, slug, body: content, coverSrc, readingMinutes: Math.max(1, Math.round(words / 200)) };
}

let cache: NewsPost[] | null = null;

/** All published posts, newest first. Drafts are visible only in development. */
export function getAllPosts(): NewsPost[] {
  if (cache && process.env.NODE_ENV === 'production') return cache;
  const files = fs.existsSync(NEWS_DIR) ? fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith('.mdx')) : [];
  const posts = files
    .map(readPost)
    .filter((post) => !post.draft || process.env.NODE_ENV !== 'production')
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));
  cache = posts;
  return posts;
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

/** Previous (older) and next (newer) post for the article footer. */
export function getNeighbours(slug: string) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  };
}

/**
 * Photos in the post folder for <Galeria />: everything except the cover
 * and photos already placed in the text, in file-name order (01.jpg, 02.jpg…).
 */
export function getGalleryImages(post: NewsPost) {
  const folder = path.join(PUBLIC_DIR, post.slug);
  if (!fs.existsSync(folder)) return [];
  const usedInline = new Set(
    [...post.body.matchAll(/!\[[^\]]*\]\(([^)\s]+)\)/g)].map((match) => postAsset(post.slug, match[1])),
  );
  return fs
    .readdirSync(folder)
    .filter((file) => imagePattern.test(file))
    .map((file) => postAsset(post.slug, file))
    .filter((src) => src !== post.coverSrc && !usedInline.has(src))
    .sort();
}

export type GalleryPhoto = { src: string; width: number; height: number };

/** Real size of an image in public/, so it can be shown uncropped. */
export async function getImageSize(src: string) {
  const { width = 1600, height = 1200 } = await sharp(path.join(process.cwd(), 'public', src)).metadata();
  return { width, height };
}

/** Gallery photos with their real size, so the grid can show them uncropped without layout shift. */
export async function getGalleryPhotos(post: NewsPost): Promise<GalleryPhoto[]> {
  return Promise.all(
    getGalleryImages(post).map(async (src) => {
      const { width = 1600, height = 1200 } = await sharp(path.join(process.cwd(), 'public', src)).metadata();
      return { src, width, height };
    }),
  );
}

const dateFormatter = new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** 2026-06-07 → "7 czerwca 2026" */
export function formatDate(iso: string) {
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`));
}
