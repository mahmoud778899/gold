import './globals.css';

export const metadata = {
  title: 'سعر الذهب في مصر الآن',
  description: 'تعرّف على آخر أسعار الذهب ومقالات حول الاستثمار.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}