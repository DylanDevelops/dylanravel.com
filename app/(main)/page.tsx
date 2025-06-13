import Image from "next/image";

import "./_components/frosted-glass.css";

import Link from "next/link";
import { BoxIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

import { GitHubURL, InstagramURL, LinkedInURL } from "@/lib/links";

const MainPage = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col p-0 m-0 bg-[#202020] bg-[url('/backgrounds/shapes.png')] bg-repeat bg-[length:600px_600px]">
      <div className="absolute inset-0 bg-[#202020]/80 pointer-events-none z-0" />
      <main className="relative flex flex-col gap-2 flex-1 justify-center items-center space-y-2 p-10 z-10">
        <nav className="flex flex-row max-w-[60rem] frosted-glass-card p-4 gap-6 items-center">
          <BoxIcon className="text-white w-8 h-8" />
          <p className="text-white font-bold">About</p>
          <p className="text-white font-bold">Skills</p>
          <p className="text-white font-bold">Projects</p>
          <p className="text-white font-bold">Contact</p>
        </nav>
        <div className="flex flex-col md:flex-row max-w-[60rem] frosted-glass-card p-10 gap-6 items-start">
          <div className="flex flex-row md:flex-col md:items-center gap-2 flex-shrink-0">
            <Image
              src="/images/pfp.webp"
              unoptimized
              width={1}
              height={1}
              alt="A picture of Dylan Ravel"
              className="w-48 h-48 rounded-2xl"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl text-white">Dylan Ravel</p>
              <div className="flex flex-row gap-2 md:justify-center">
                <Link
                  href={GitHubURL}
                  className="text-white hover:scale-105 transition-all duration-200 hover:text-white/80"
                >
                  <GithubIcon />
                </Link>
                <Link
                  href={LinkedInURL}
                  className="text-white hover:scale-105 transition-all duration-200 hover:text-white/80"
                >
                  <LinkedinIcon />
                </Link>
                <Link
                  href={InstagramURL}
                  className="text-white hover:scale-105 transition-all duration-200 hover:text-white/80"
                >
                  <InstagramIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col min-w-0 space-y-10">
            <section id="about" className="flex flex-col gap-2">
              <h1 className="text-white font-bold text-2xl">About</h1>
              <p className="text-white">
                I am a game developer, programmer, and student passionate about building scalable, creative, and
                innovative applications.
              </p>
              <p className="text-white">
                With intimate knowledge of full-stack software development, project management, and game design, I build
                systems that allow users to see the world in a new way.
              </p>
            </section>
            <section id="skills" className="flex flex-col gap-2">
              <h1 className="text-white font-bold text-2xl">Skills</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ad quam, porro voluptas adipisci,
                  aut magnam eum eius distinctio minima, pariatur autem doloremque numquam beatae aspernatur odit
                  facilis maiores dolor.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ad quam, porro voluptas adipisci,
                  aut magnam eum eius distinctio minima, pariatur autem doloremque numquam beatae aspernatur odit
                  facilis maiores dolor.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ad quam, porro voluptas adipisci,
                  aut magnam eum eius distinctio minima, pariatur autem doloremque numquam beatae aspernatur odit
                  facilis maiores dolor.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ad quam, porro voluptas adipisci,
                  aut magnam eum eius distinctio minima, pariatur autem doloremque numquam beatae aspernatur odit
                  facilis maiores dolor.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ad quam, porro voluptas adipisci,
                  aut magnam eum eius distinctio minima, pariatur autem doloremque numquam beatae aspernatur odit
                  facilis maiores dolor.
                </p>
              </div>
            </section>
            <section id="projects" className="flex flex-col gap-2">
              <h1 className="text-white font-bold text-2xl">Projects</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad magni delectus, dolores sint,
                  ipsa itaque porro sequi adipisci temporibus, animi veritatis unde tenetur obcaecati voluptates
                  consequatur! Saepe, reiciendis ullam.
                </p>
              </div>
            </section>
            <section id="contact" className="flex flex-col gap-2">
              <h1 className="text-white font-bold text-2xl">Contact</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad magni delectus, dolores sint,
                  ipsa itaque porro sequi adipisci temporibus, animi veritatis unde tenetur obcaecati voluptates
                  consequatur! Saepe, reiciendis ullam.
                </p>
              </div>
            </section>
          </div>
        </div>
        <footer className="flex flex-row max-w-[60rem] frosted-glass-card p-4 gap-6 items-center">
          <p className="text-white">
            © 2025 by{" "}
            <Link href="/" className="font-bold">
              Dylan Ravel
            </Link>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default MainPage;
