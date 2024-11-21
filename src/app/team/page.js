import Image from "next/image";
import pilot from '../../../public/images/dave-in-flight-suit.jpg';
import commander from '../../../public/images/auto-at-a-holo-map.jpg';
import placeholderImg from '../../../public/images/Portrait_placeholder.png';

// add links and specific team member pages with bios and history.
const staff = [
  {
    name: 'Auto Newman',
    title: 'Commander',
    photo: commander
  },
  {
    name: 'Dave Wayne',
    title: 'Pilot',
    photo: pilot
  },
  {
    name: 'Roger',
    title: 'Comms Specialist',
    photo: placeholderImg
  },
  {
    name: 'Summer Tam',
    title: 'Scout Leader',
    photo: placeholderImg
  },
  {
    name: 'River Glau',
    title: 'Scout',
    photo: placeholderImg
  },
  {
    name: 'Alan Washburne',
    title: 'Scout',
    photo: placeholderImg
  },
  {
    name: 'Hoban Tudyk',
    title: 'Engineer',
    photo: placeholderImg
  },
  {
    name: 'Jewel Frye',
    title: 'Lead Engineer',
    photo: placeholderImg
  },
  {
    name: 'Kaylee Staite',
    title: 'Engineer',
    photo: placeholderImg
  },
  {
    name: 'Morena Serra',
    title: 'Engineer',
    photo: placeholderImg
  },
]

export default function Team() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-6xl m-auto w-full h-full">
        <div className="h-96 mb-12 content-center">
          <h1>Sumerian Team Members</h1>
          <p>Commitment to being team players is of top priority.</p>
        </div>
        <div className="grid grid-cols-4 gap-5 w-full">
          {staff[0] ? staff.map((s) =>
            <div className="bg-gradient-to-b from-cyan-500/50 via-cyan-500/25 to-cyan-500/50 p-5 rounded-lg">
              <Image
                src={s.photo}
                width={300} height={300}
                alt="Commander Auto looking at a holo map"
                className="mb-4 m-auto rounded-lg"
                placeholder="blur"
                style={{ objectFit: "cover", height: '200px', width: '200px' }}
              />
              <h2>{s.name}</h2>
              <p>{s.title}</p>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
