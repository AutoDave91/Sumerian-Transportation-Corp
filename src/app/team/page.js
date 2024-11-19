import Image from "next/image";
import pilot from '../../../public/images/dave-in-flight-suit.jpg';
import commander from '../../../public/images/auto-at-a-holo-map.jpg';

// add links and specific team member pages with bios and history.

export default function Team() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1>Sumerian Team Members</h1>
          <p>Commitment to being team players is of top priority.</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-gradient-to-b from-cyan-500/50 via-cyan-500/25 to-cyan-500/50 p-5 rounded-lg">
            <Image src={commander} width={500} height={500} alt="Commander Auto looking at a holo map" className="mb-4" />
            <h2>Auto</h2>
            <p>Commands the company from the Fertile Crescent.</p>
          </div>
          <div className="bg-gradient-to-b from-cyan-500/50 via-cyan-500/25 to-cyan-500/50 p-5 rounded-lg">
            <Image src={pilot} width={500} height={500} alt="Heavy Lift Pilot Dave" className="mb-4" />
            <h2>Dave</h2>
            <p>Pilots the Heavy Lift Sumer.</p>
            <p></p>
          </div>
        </div>
      </main>
    </div>
  );
}
