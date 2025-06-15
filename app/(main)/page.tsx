import Image from "next/image";

import "./_components/frosted-glass.css";

import Link from "next/link";
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { ContactInformation } from "@/lib/branding";
import { GitHubURL, InstagramURL, ItchIoURL, KoFiURL, LinkedInURL } from "@/lib/links";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import About from "./_components/sections/about";
import Contact from "./_components/sections/contact";
import Hello from "./_components/sections/hello";
import Projects from "./_components/sections/projects";
import Skills from "./_components/sections/skills";

const MainPage = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col p-0 m-0 bg-[#202020] bg-[url('/backgrounds/shapes.png')] bg-repeat bg-[length:600px_600px]">
      <div className="absolute inset-0 bg-[#202020]/80 pointer-events-none z-0" />
      <main className="md:relative flex flex-col gap-2 flex-1 justify-center items-center space-y-2 p-10 z-10">
        <Navbar />
        <div className="flex flex-col items-center md:flex-row max-w-[60rem] frosted-glass-card p-10 gap-6">
          <div className="flex flex-col items-center gap-2 md:flex-shrink-0 md:sticky top-10 md:self-start h-fit">
            <div className="frosted-glass-button rounded-4xl">
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
              <p className="font-bold text-[1.5rem] text-white">Dylan Ravel</p>
              <div className="flex flex-col gap-2 w-max mx-auto">
                <Link
                  href={ContactInformation.Email}
                  target="_blank"
                  className="frosted-glass-button py-2 rounded-full p-2 text-white hover:scale-110 transition-all duration-200 flex flex-row gap-2 justify-between items-center w-full"
                >
                  <MailIcon className="w-5 h-5" /> Contact Me
                </Link>
                <div className="flex flex-row gap-2 justify-center w-full">
                  <Link
                    href={GitHubURL}
                    target="_blank"
                    className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </Link>
                  <Link
                    href={LinkedInURL}
                    target="_blank"
                    className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </Link>
                  <Link
                    href={InstagramURL}
                    target="_blank"
                    className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 justify-center">
                <Link
                  href={ItchIoURL}
                  target="_blank"
                  className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
                >
                  <Image
                    src="/icons/itch.svg"
                    alt="Itch.io Logo"
                    className="w-5 h-5"
                    unoptimized
                    width={1}
                    height={1}
                  />
                </Link>
                <Link
                  href={KoFiURL}
                  target="_blank"
                  className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
                >
                  <Image
                    src="/icons/kofi.svg"
                    alt="Itch.io Logo"
                    className="w-5 h-5 bg-blend-color"
                    unoptimized
                    width={1}
                    height={1}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col min-w-0 space-y-10">
            <Hello />
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
