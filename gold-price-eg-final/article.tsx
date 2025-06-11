import Link from 'next/link';
import articles from '@/data/articles.json';

export default function ArticlesPage() {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">كل المقالات</h1>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/articles/${article.slug}`} className="text-blue-600 underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}