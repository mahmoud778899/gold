import Link from 'next/link';
import articles from '@/data/articles.json';
import goldData from '@/data/gold.json';

export default function HomePage() {
  const goldPrices = goldData;
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">سعر الذهب في مصر الآن</h1>
      <ul className="mb-8">
        {Object.entries(goldPrices).map(([karat, price]) => (
          <li key={karat}>عيار {karat.replace('a', '')}: {price} جنيه</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mb-2">مقالات مميزة</h2>
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