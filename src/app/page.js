import Head from 'next/head';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>Sumerian Transportation Crop</title>
        <meta name="description" content="Fictional company created for Armco's Meta Campaign." />
        <meta property="og:title" content="Sumerian Transportation Crop" />
        <meta property="og:description" content="Fictional company created for Armco's Meta Campaign." />
        <meta property="og:image" content="public\images\auto-at-a-holo-map.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sumerian Transportation Crop" />
        <meta name="twitter:description" content="Fictional company created for Armco's Meta Campaign." />
        <meta name="twitter:image" content="public\images\auto-at-a-holo-map.jpg" />
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Sumerian Transportation Corp</h1>
        <p>Nothing is too heavy!</p>
      </main>
    </div>
  );
}
