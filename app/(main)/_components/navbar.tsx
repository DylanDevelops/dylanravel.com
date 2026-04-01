"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon } from "lucide-react";

import { PortfolioConstants } from "@/lib/branding";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);
  const [isScrollingAfterClick, setIsScrollingAfterClick] = useState(false);
  const scrollEndTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleLinkClick = () => {
    setShowNav(false);
    setIsScrollingAfterClick(true);
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setShowNav(false);
    setIsScrollingAfterClick(true);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowNav(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowNav(true);
        setIsScrollingAfterClick(false);
        if (scrollEndTimeout.current) {
          clearTimeout(scrollEndTimeout.current);
        }
        lastScrollY.current = 0;
        return;
      }

      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current);
      }

      scrollEndTimeout.current = setTimeout(() => {
        setIsScrollingAfterClick(false);
      }, 150);

      if (isScrollingAfterClick) {
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setShowNav(false);
        setMobileMenuOpen(false);
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
      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current);
      }
    };
  }, [isScrollingAfterClick]);

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
      className={cn(
        "fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 transition-transform duration-300 sm:w-auto",
        showNav ? "translate-y-0" : "-translate-y-[calc(100%+24rem)]"
      )}
    >
      <div className="frosted-glass-card mx-auto mt-4 hidden max-w-[60rem] flex-row items-center sm:flex">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="rounded-l-[3.125rem] border-white/40 bg-transparent px-4 py-4 pr-4 font-bold text-white transition-colors duration-200 hover:bg-white/10"
        >
          <PortfolioConstants.Logo className="h-8 w-8 text-white" aria-label="Go Home" />
        </Link>
        <Link
          href="/#about"
          onClick={handleLinkClick}
          className="border-white/40 bg-transparent px-4 py-5 font-bold text-white transition-colors duration-200 hover:bg-white/10"
        >
          About
        </Link>
        <Link
          href="/#skills"
          onClick={handleLinkClick}
          className="border-white/40 bg-transparent px-4 py-5 font-bold text-white transition-colors duration-200 hover:bg-white/10"
        >
          Skills
        </Link>
        <Link
          href="/#projects"
          onClick={handleLinkClick}
          className="border-white/40 bg-transparent px-4 py-5 font-bold text-white transition-colors duration-200 hover:bg-white/10"
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          onClick={handleLinkClick}
          className="rounded-r-[3.125rem] border-white/40 bg-transparent px-4 py-5 pr-4 font-bold text-white transition-colors duration-200 hover:bg-white/10"
        >
          Contact
        </Link>
      </div>
      <div className="mt-4 flex w-full justify-center sm:hidden">
        <div className="flex w-full max-w-[60rem] flex-row items-start justify-between px-6">
          <Link
            href="/"
            onClick={handleLogoClick}
            className={cn(
              "rounded-full font-bold text-white transition-colors duration-200 hover:bg-white/10",
              showNav ?? "shadow-lg"
            )}
          >
            <div className="frosted-glass-card flex w-min flex-row items-center gap-6 p-5">
              <PortfolioConstants.Logo className="h-6 w-6 text-white" aria-label="Go Home" />
            </div>
          </Link>
          <motion.div
            ref={navRef}
            className={cn("cursor-pointer rounded-full font-bold text-white", showNav ?? "shadow-lg")}
          >
            <AnimatePresence mode="wait" initial={false}>
              {!mobileMenuOpen && (
                <motion.div
                  key="menu-icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setMobileMenuOpen(true)}
                  className="frosted-glass-card flex w-min flex-row items-center gap-6"
                >
                  <div className="w-min rounded-full p-5 transition-colors duration-200 hover:bg-white/10">
                    <MenuIcon className="h-6 w-6 text-white" />
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
                  className="frosted-glass-card flex flex-col overflow-hidden"
                >
                  {["About", "Skills", "Projects", "Contact"].map((link, index) => (
                    <motion.div
                      key={link}
                      custom={index}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="w-full transition-colors duration-200 select-none hover:bg-white/10"
                    >
                      <Link
                        href={`/#${link.toLowerCase()}`}
                        className={cn(
                          "flex w-full justify-center px-10 py-2",
                          index === 0 ? "rounded-t-[3.125rem] pt-4" : "",
                          index === 3 ? "rounded-b-[3.125rem] pb-4" : ""
                        )}
                        onClick={handleMobileLinkClick}
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
