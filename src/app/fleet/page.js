import Head from 'next/head';
// add links and specific vehicle pages with stats and history.

const vehicles = [
  { name: 'Sumer', type: 'Heavy Lift VTOL', portrait: '', activelyAssigned: false },
  { name: 'Fertile Crescent', type: 'Light Transport Orbital', portrait: '', activelyAssigned: false },
  { name: 'Scout Vehicle', type: 'Light Vehicle', portrait: '', activelyAssigned: false },
]

export const metadata = {
  title: "Our Fleet | Sumerian Transportation Corp",
  description: "Fictional company created for Armco's Meta Campaign.",
};

export default function Fleet() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>Our Fleet | Sumerian Transportation Corp</title>
        <meta name="description" content="Fictional company created for Armco's Meta Campaign." />
        <meta property="og:title" content="Our Fleet | Sumerian Transportation Corp" />
        <meta property="og:description" content="Fictional company created for Armco's Meta Campaign." />
        <meta property="og:image" content="public\images\auto-at-a-holo-map.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Fleet | Sumerian Transportation Corp" />
        <meta name="twitter:description" content="Fictional company created for Armco's Meta Campaign." />
        <meta name="twitter:image" content="public\images\auto-at-a-holo-map.jpg" />
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full content-center">
        <div className="h-96 mb-12 content-center">
          <h1>Sumerian Fleet</h1>
          <p>Nothing is too heavy!</p>
        </div>
        <div className="grid grid-cols-3 gap-5 w-full">
          {vehicles[0] ? (vehicles.map((v) =>
            <div className="bg-gradient-to-b from-cyan-500/50 via-cyan-500/25 to-cyan-500/50 p-5 rounded-lg" key={v.name}>
              <h2>{v.name}</h2>
              <h3>{v.type}</h3>
            </div>)
          ) : null}
        </div>
      </main>
    </div>
  );
}
