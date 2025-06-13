import Image from "next/image";

import "./_components/frosted-glass.css";

import Link from "next/link";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

import { GitHubURL, InstagramURL, LinkedInURL } from "@/lib/links";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import About from "./_components/sections/about";
import Contact from "./_components/sections/contact";
import Projects from "./_components/sections/projects";
import Skills from "./_components/sections/skills";

const MainPage = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col p-0 m-0 bg-[#202020] bg-[url('/backgrounds/shapes.png')] bg-repeat bg-[length:600px_600px]">
      <div className="absolute inset-0 bg-[#202020]/80 pointer-events-none z-0" />
      <main className="relative flex flex-col gap-2 flex-1 justify-center items-center space-y-2 p-10 z-10">
        <Navbar />
        <div className="flex flex-col md:flex-row max-w-[60rem] frosted-glass-card p-10 gap-6 items-start">
          <div className="flex flex-row md:flex-col md:items-center gap-2 flex-shrink-0">
            <div className="frosted-glass-card">
              <Image
                src="/images/pfp.webp"
                unoptimized
                width={1}
                height={1}
                alt="A picture of Dylan Ravel"
                className="w-48 h-48 rounded-4xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl text-white">Dylan Ravel</p>
              <div className="flex flex-row gap-2 md:justify-center">
                <Link
                  href={GitHubURL}
                  target="_blank"
                  className="frosted-glass-card p-2 rounded-full text-white hover:scale-110 transition-all duration-200 hover:text-white/80"
                >
                  <GithubIcon className="w-5 h-5" />
                </Link>
                <Link
                  href={LinkedInURL}
                  target="_blank"
                  className="frosted-glass-card p-2 rounded-full text-white hover:scale-110 transition-all duration-200 hover:text-white/80"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </Link>
                <Link
                  href={InstagramURL}
                  target="_blank"
                  className="frosted-glass-card p-2 rounded-full text-white hover:scale-110 transition-all duration-200 hover:text-white/80"
                >
                  <InstagramIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col min-w-0 space-y-10">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default MainPage;
