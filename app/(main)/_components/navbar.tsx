"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

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
          <motion.div className={cn("text-white font-bold rounded-full cursor-pointer", showNav ?? "shadow-lg")}>
            <AnimatePresence mode="wait" initial={false}>
              {!mobileMenuOpen && (
                <motion.div
                  key="menu-icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setMobileMenuOpen(true)}
                  className="flex flex-row w-min frosted-glass-card gap-6 items-center"
                >
                  <div className="w-min p-4 hover:bg-white/10 transition-colors duration-200 rounded-full">
                    <MenuIcon className="text-white w-6 h-6" />
                  </div>
                </motion.div>
              )}
              {mobileMenuOpen && (
                <motion.div
                  key="menu-links"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col overflow-hidden frosted-glass-card"
                >
                  {["About", "Skills", "Projects", "Contact"].map((link, index) => (
                    <motion.div
                      key={link}
                      custom={index}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="w-full hover:bg-white/10 transition-colors duration-200 select-none"
                    >
                      <Link
                        href={`/#${link.toLowerCase()}`}
                        className={cn(
                          "w-full py-2 px-10 flex justify-center",
                          index === 0 ? "pt-4 rounded-t-[3.125rem]" : "",
                          index === 3 ? "pb-4 rounded-b-[3.125rem]" : ""
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      >
                        {link}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
