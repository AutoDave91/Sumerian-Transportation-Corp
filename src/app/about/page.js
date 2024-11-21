import Head from 'next/head';

export const metadata = {
  title: "About Us | Sumerian Transportation Corp",
  description: "Fictional company created for Armco's Meta Campaign.",
};

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>About Us | Sumerian Transportation Corp</title>
        <meta name="description" content="Fictional company created for Armco's Meta Campaign." />
        <meta property="og:title" content="About Us | Sumerian Transportation Corp" />
        <meta property="og:description" content="Fictional company created for Armco's Meta Campaign." />
        <meta property="og:image" content="public\images\auto-at-a-holo-map.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Sumerian Transportation Corp" />
        <meta name="twitter:description" content="Fictional company created for Armco's Meta Campaign." />
        <meta name="twitter:image" content="public\images\auto-at-a-holo-map.jpg" />
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="h-96 mb-12 content-center">
          <h1>About Us</h1>
          <p>Sumerian Transportation Corp</p>
        </div>
        <section>
          <div>
            <h2>Who were we before Armco?</h2>
            <p></p>
          </div>
          <div>
            <h2>Our ongoing history with Armco</h2>
            <p></p>
          </div>
          <div>
            <h2>Associates we&apos;ve been members of</h2>
            <p></p>
          </div>
        </section>
      </main>
    </div>
  );
}
