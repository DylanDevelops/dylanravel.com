"use client";

import "@/components/css/frosted-glass.css";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HomeIcon, SignpostIcon } from "lucide-react";

import FloatingShapes from "./(main)/_components/floating-shapes";
import Footer from "./(main)/_components/footer";
import Navbar from "./(main)/_components/navbar";

const NotFound = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateXValue = (mouseY / (rect.height / 2)) * -8;
      const rotateYValue = (mouseX / (rect.width / 2)) * 8;

      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <div className="relative m-0 flex min-h-screen w-screen flex-col bg-[#202020] p-0">
      <FloatingShapes />

      <div className="pointer-events-none absolute inset-0 z-0 bg-[#202020]/70" />

      <main className="z-10 flex flex-1 flex-col items-center justify-center gap-2 space-y-2 p-4 md:relative">
        <Navbar />
        <div
          ref={cardRef}
          className="flex flex-col items-center gap-4"
          style={{
            transform: isMobile ? "none" : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <div className="frosted-glass-card flex max-w-[60rem] flex-col items-center gap-6 p-10">
            <SignpostIcon className="h-16 w-16 text-white sm:h-24 sm:w-24" />
            <h1 className="text-center text-4xl font-bold text-white sm:text-6xl">Error: 404</h1>
            <p className="text-white/80">Seems like you took a wrong turn. Return to the home page?</p>
            <Link
              href="/"
              className="frosted-glass-button flex flex-row items-center gap-2 rounded-full p-2 py-2 text-white transition-all duration-200 hover:scale-110"
            >
              <HomeIcon className="h-5 w-5" /> Home
            </Link>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default NotFound;
