import type { MetadataRoute } from 'next';
import { euProjects } from '@/data/eu-projects';
import { products } from '@/data/precast-products';
import { getAllPosts } from '@/lib/news';

const SITE = 'https://transbet.com.pl';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/o-nas', '/oferta', '/laboratorium-betonowe', '/sprzet-i-wynajem', '/kruszywa-budowlane', '/beton', '/prefabrykacja-betonowa', '/aktualnosci', '/dokumenty', '/kariera', '/czlonkostwa', '/pielegnacja-betonu', '/sklad-betonu', '/ogolne-warunki-sprzedazy', '/srodki-ue', ...euProjects.map((project) => `/srodki-ue/${project.slug}`), ...products.map((product) => `/prefabrykacja-betonowa/${product.slug}`)].map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE}/aktualnosci/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
    images: [`${SITE}${post.coverSrc}`],
  }));

  return [...pages, ...posts];
}
