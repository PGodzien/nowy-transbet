import type { ComponentPropsWithoutRef } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import NewsGallery from '@/components/news/NewsGallery';
import YouTubeFacade from '@/components/YouTubeFacade';
import { getGalleryPhotos, postAsset, type GalleryPhoto, type NewsPost } from '@/lib/news';

/*
 * Components available inside a news post:
 *   <Galeria />                 photos from the post folder (all except the cover and those placed in the text)
 *   <Film src="film.mp4" />     a video file from the post folder
 *   <Wideo id="YouTube-ID" />   a YouTube film, loaded after a click
 *   ![opis](02.jpg)             a single photo from the post folder
 * Plain markdown (## headings, **bold**, lists, > quotes, links) is styled below.
 */
function components(post: NewsPost, photos: GalleryPhoto[]) {
  return {
    Galeria: () => <NewsGallery images={photos} alt={post.title} />,
    Film: ({ src }: { src: string }) => (
      <div className="not-prose my-10 flex justify-center bg-black">
        <video src={postAsset(post.slug, src)} controls playsInline preload="metadata" className="max-h-[75vh] w-auto max-w-full" />
      </div>
    ),
    Wideo: ({ id, title }: { id: string; title?: string }) => (
      <div className="not-prose relative my-10 aspect-video overflow-hidden bg-black">
        <YouTubeFacade id={id} title={title ?? post.title} />
      </div>
    ),
    // The page already has the title as h1, so a heading written with "#" becomes h2.
    h1: (props: ComponentPropsWithoutRef<'h2'>) => <h2 {...props} />,
    a: ({ href = '', ...props }: ComponentPropsWithoutRef<'a'>) =>
      /^https?:\/\//.test(href) ? <a href={href} target="_blank" rel="noreferrer" {...props} /> : <a href={href} {...props} />,
    img: ({ src = '', alt = '' }: ComponentPropsWithoutRef<'img'>) => (
      // eslint-disable-next-line @next/next/no-img-element -- size of photos written in the text is unknown
      <img src={postAsset(post.slug, String(src))} alt={alt} loading="lazy" className="my-10 w-full" />
    ),
  };
}

export async function renderPost(post: NewsPost) {
  const photos = /<Galeria\b/.test(post.body) ? await getGalleryPhotos(post) : [];
  const { content } = await compileMDX({
    source: post.body,
    components: components(post, photos),
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  return content;
}
