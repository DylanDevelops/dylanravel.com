"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { ProfileInformation } from "@/lib/branding";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

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

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
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
          <ProfileInformation.Logo className="text-white w-8 h-8" />
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
        <div className="flex flex-row justify-between items-start w-full max-w-[60rem] px-6">
          <Link
            href="/"
            className={cn(
              "text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-200",
              showNav ?? "shadow-lg"
            )}
          >
            <div className="flex flex-row w-min frosted-glass-card p-4 gap-6 items-center">
              <ProfileInformation.Logo className="text-white w-6 h-6" />
            </div>
          </Link>
          <button
            className={cn(
              "text-white font-bold rounded-full cursor-pointer",
              showNav ?? "shadow-lg",
              !mobileMenuOpen ? "hover:bg-white/10 transition-colors duration-200" : ""
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={cn("flex flex-row w-min frosted-glass-card gap-6 items-center", !mobileMenuOpen ? "p-4" : "")}
            >
              <MenuIcon className={cn("text-white w-6 h-6", mobileMenuOpen ? "hidden" : "block")} />
              <div className={cn("flex-col", mobileMenuOpen ? "flex" : "hidden")}>
                <Link
                  href="/#about"
                  className="w-full px-10 py-2 pt-4 hover:bg-white/10 transition-colors duration-200 rounded-t-[3.125rem] select-none"
                >
                  About
                </Link>
                <Link
                  href="/#skills"
                  className="w-full px-10 py-2 hover:bg-white/10 transition-colors duration-200 select-none"
                >
                  Skills
                </Link>
                <Link
                  href="/#projects"
                  className="w-full px-10 py-2 hover:bg-white/10 transition-colors duration-200 select-none"
                >
                  Projects
                </Link>
                <Link
                  href="/#contact"
                  className="w-full px-10 py-2 pb-4 hover:bg-white/10 transition-colors duration-200 rounded-b-[3.125rem] select-none"
                >
                  Contact
                </Link>
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
