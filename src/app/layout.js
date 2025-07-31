//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export const metadata = {
  title: "Sarah Fleming",
  description: "Sarah Fleming portfolio and personal website",
};

function Header(){
  return (
    <header className="bg-[#4A4E69] bg-[radial-gradient(circle_at_top_right,_#6c6f91,_#4A4E69)] py-4">
      <div className="w-full md:container md:mx-auto px-4">
        <nav className="flex items-center justify-end h-10">
          <div className="flex pl-10 mr-auto">
            <Link href="/">
              <Image 
                src={`${basePath}/images/Initials.png`} 
                alt="Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="flex overflow-x-auto space-x-3 md:space-x-6 lg:space-x-8">
            <Link href="/" className="text-base md:text-lg font-semibold text-[#F9F5F2] hover:text-[#9A8C98]">
              Home
            </Link>
            <Link href="/projects" className="text-base md:text-lg font-semibold text-[#F9F5F2] hover:text-[#9A8C98]">
              Projects
            </Link>
            <Link href="/photography" className="text-base md:text-lg font-semibold text-[#F9F5F2] hover:text-[#9A8C98]">
              Photography
            </Link>
            <Link href="/experience" className="text-base md:text-lg font-semibold text-[#F9F5F2] hover:text-[#9A8C98]">
              Experience
            </Link>
            <Link href="/contact" className="text-base md:text-lg font-semibold text-[#F9F5F2] hover:text-[#9A8C98]">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children} 
      </body>
    </html>
  );
}
