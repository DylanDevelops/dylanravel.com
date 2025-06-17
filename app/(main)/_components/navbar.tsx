"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BoxIcon, MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full sm:w-auto z-50 transition-transform duration-300 fixed top-0 left-1/2 -translate-x-1/2",
        showNav ? "translate-y-0" : "-translate-y-[calc(100%+24rem)]"
      )}
    >
      <div className="hidden sm:flex flex-row max-w-[60rem] frosted-glass-card items-center mx-auto mt-4">
        <Link
          href="/"
          className="bg-transparent text-white font-bold px-4 border-white/40 hover:bg-white/10 py-4 pr-4 rounded-l-[3.125rem] duration-200 transition-colors"
        >
          <BoxIcon className="text-white w-8 h-8" />
        </Link>
        <Link
          href="/#about"
          className="bg-transparent text-white font-bold px-4 border-white/40 hover:bg-white/10 py-5 duration-200 transition-colors"
        >
          About
        </Link>
        <Link
          href="/#skills"
          className="bg-transparent text-white font-bold px-4 border-white/40 hover:bg-white/10 py-5 duration-200 transition-colors"
        >
          Skills
        </Link>
        <Link
          href="/#projects"
          className="bg-transparent text-white font-bold px-4 border-white/40 hover:bg-white/10 py-5 duration-200 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="bg-transparent text-white font-bold px-4 border-white/40 hover:bg-white/10 py-5 pr-4 rounded-r-[3.125rem] duration-200 transition-colors"
        >
          Contact
        </Link>
      </div>
      <div className="flex w-full justify-center mt-4 sm:hidden">
        <div className="flex flex-row justify-between w-full max-w-[60rem] px-4">
          <Link
            href="/"
            className={cn(
              "text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-200",
              showNav ?? "shadow-lg"
            )}
          >
            <div className="flex flex-row w-min frosted-glass-card p-4 gap-6 items-center">
              <BoxIcon className="text-white w-6 h-6" />
            </div>
          </Link>
          <Link
            href="/"
            className={cn(
              "text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-200",
              showNav ?? "shadow-lg"
            )}
          >
            <div className="flex flex-row w-min frosted-glass-card p-4 gap-6 items-center">
              <MenuIcon className="text-white w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
