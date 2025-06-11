import articles from '@/data/articles.json';

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return <div>لم يتم العثور على المقال</div>;

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <p>{article.content}</p>
    </main>
  );
}