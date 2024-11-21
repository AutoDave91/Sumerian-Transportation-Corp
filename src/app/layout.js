import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Starfield from "@/components/stars";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sumerian Transportation Corp",
  description: "Fictional company created for Armco's Meta Campaign.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <nav className="bg-gradient-to-b from-cyan-500/75 to-transparent">
          <div className="flex justify-between p-2 pt-10 pb-10 max-w-6xl m-auto text-xl" >
            <Link href='/'>Home</Link>
            <div className="flex gap-9">
              <Link href='/about'>About</Link>
              <Link href='/team'>Team</Link>
              <Link href='/fleet'>Fleet</Link>
            </div>
          </div>
        </nav>
        <section className="p-2 max-w-6xl m-auto h-full w-full">
          {children}
        </section>
        <footer className="bg-gradient-to-b from-transparent to-cyan-500/75 content-end">
          <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center max-w-6xl m-auto h-20">

          </div>
        </footer>
      </body>
    </html>
  );
}
