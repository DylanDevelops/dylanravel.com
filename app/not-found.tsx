import "@/components/css/frosted-glass.css";

import Link from "next/link";
import { HomeIcon, SignpostIcon } from "lucide-react";

import Footer from "./(main)/_components/footer";
import Navbar from "./(main)/_components/navbar";

const NotFound = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col p-0 m-0 bg-[#202020] bg-[url('/backgrounds/shapes.webp')] bg-repeat bg-[length:600px_600px]">
      <div className="absolute inset-0 bg-[#202020]/80 pointer-events-none z-0" />
      <main className="md:relative flex flex-col gap-2 flex-1 justify-center items-center space-y-2 p-4 z-10">
        <Navbar />
        <div className="flex flex-col items-center max-w-[60rem] frosted-glass-card p-10 gap-6">
          <SignpostIcon className="w-16 h-16 sm:w-24 sm:h-24 text-white" />
          <h1 className="text-white font-bold text-4xl sm:text-6xl text-center">Error: 404</h1>
          <p className="text-white/80">Seems like you took a wrong turn. Return to the home page?</p>
          <Link
            href="/"
            className="frosted-glass-button py-2 rounded-full p-2 text-white hover:scale-110 transition-all duration-200 flex flex-row gap-2 items-center"
          >
            <HomeIcon className="w-5 h-5" /> Home
          </Link>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default NotFound;
