// add links and specific vehicle pages with stats and history.

export default function Fleet() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1>Sumerian Fleet</h1>
          <p>Nothing is too heavy!</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-gradient-to-b from-cyan-500/50 via-cyan-500/25 to-cyan-500/50 p-5 rounded-lg">
            <h2>Sumer</h2>
            <h3>Heavy Lift VTOL</h3>
          </div>
          <div className="bg-gradient-to-b from-cyan-500/50 via-cyan-500/25 to-cyan-500/50 p-5 rounded-lg">
            <h2>Fertile Crescent</h2>
            <h3>Small Freighter</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
