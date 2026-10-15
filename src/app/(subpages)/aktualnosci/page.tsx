import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import NewsList from '@/components/news/NewsList';
import { categories, formatDate, getAllPosts } from '@/lib/news';

export const metadata: Metadata = {
  title: 'Aktualności',
  description:
    'Bieżące informacje z życia firmy Transbet: realizacje, wydarzenia branżowe, wyróżnienia i lokalne inicjatywy, które wspieramy.',
};

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        number="05"
        eyebrow="Aktualności"
        title="Aktualności"
        description="Bieżące informacje z życia firmy. Dzielimy się tutaj wszystkimi aktualnościami, które mogą być przydatne dla naszych klientów. Pokazujemy również zaplecze naszej pracy i przedstawiamy, jak wygląda nasza działalność od środka. Znajdziesz tu też poradniki i praktyczne wskazówki dotyczące betonu."
        // A fixed photo: post covers are often graphics with their own text, which would clash with the title.
        image="/background.jpg"
        facts={[
          { value: 'Bądź na bieżąco z życiem firmy', label: 'aktualności', wide: true },
          { value: 'Firmowy blog z poradami i wiedzą o betonie', label: 'blog', wide: true },
        ]}
      />

      <section className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          <NewsList
            categories={categories}
            posts={posts.map((post) => ({
              slug: post.slug,
              title: post.title,
              description: post.description,
              category: post.category,
              dateLabel: formatDate(post.date),
              coverSrc: post.coverSrc,
            }))}
          />
        </div>
      </section>
    </>
  );
}
