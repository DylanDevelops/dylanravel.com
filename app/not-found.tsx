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
    <div className="relative w-screen min-h-screen flex flex-col p-0 m-0 bg-[#202020]">
      <FloatingShapes />

      <div className="absolute inset-0 bg-[#202020]/70 pointer-events-none z-0" />

      <main className="md:relative flex flex-col gap-2 flex-1 justify-center items-center space-y-2 p-4 z-10">
        <Navbar />
        <div
          ref={cardRef}
          className="flex flex-col items-center gap-4"
          style={{
            transform: isMobile ? "none" : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
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
        </div>
      </main>
    </div>
  );
};

export default NotFound;
