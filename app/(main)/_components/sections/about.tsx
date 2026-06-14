"use client";

import { useState } from "react";
import { LaptopIcon, LucideIcon, MapPinIcon, MicroscopeIcon, MountainSnowIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { PortfolioConstants } from "@/lib/branding";

type Chapter = {
  title: string;
  teaser: string;
  icon: LucideIcon;
  content: React.ReactNode;
};

const About = () => {
  const [openChapter, setOpenChapter] = useState<string | null>(null);

  const chapters: Chapter[] = [
    {
      title: "Background",
      teaser: "Denver, Colorado → California",
      icon: MapPinIcon,
      content: (
        <p className="text-sm leading-relaxed text-white/80">
          I grew up in <span className="font-semibold text-white">Denver, Colorado</span>, surrounded by mountains,
          snow, and a video game controller always nearby. Now I&apos;m an undergrad at{" "}
          <span className="font-semibold text-white">Chapman University</span>, studying Computer Science and Game
          Development. I&apos;m still chasing the same thing I was at age eight: stories you can interact with.
        </p>
      ),
    },
    {
      title: "Craft",
      teaser: "Games, Code, Ravision Tech",
      icon: LaptopIcon,
      content: (
        <p className="text-sm leading-relaxed text-white/80">
          Video games weren&apos;t just a hobby. That obsession drove me into software, and eventually to founding{" "}
          <span className="font-semibold text-white">{PortfolioConstants.Company.LegalName}</span>. I build things I
          actually want to exist: games, tools, and products that feel good to use.
        </p>
      ),
    },
    {
      title: "Research",
      teaser: "Creating accessible technology",
      icon: MicroscopeIcon,
      content: (
        <p className="text-sm leading-relaxed text-white/80">
          As an Undergraduate Research Assistant, I help develop tools that make education more accessible for blind and
          visually impaired students. It&apos;s the work I&apos;m most proud of. The kind where the code genuinely
          changes someone&apos;s day.
        </p>
      ),
    },
    {
      title: "Off-Screen",
      teaser: "Snowboards, skateboards & a cat named Yonder",
      icon: MountainSnowIcon,
      content: (
        <p className="text-sm leading-relaxed text-white/80">
          Away from the keyboard: you&apos;ll find me on a mountain (snowboarding or hiking), cruising on a longboard,
          or deep in a draft of a story-based video game. I also have a cat named{" "}
          <span className="font-semibold text-white">Yonder</span>, who has strong opinions about how much time I spend
          at a screen.
        </p>
      ),
    },
  ];

  return (
    <section id="about" className="flex scroll-mt-10 flex-col gap-4">
      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        <motion.h2
          className="text-2xl font-bold text-white"
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col gap-2">
          {chapters.map((chapter) => {
            const isOpen = openChapter === chapter.title;
            const Icon = chapter.icon;
            return (
              <motion.div
                key={chapter.title}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                }}
                className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 transition-colors hover:bg-white/10"
              >
                <button
                  onClick={() => setOpenChapter(isOpen ? null : chapter.title)}
                  className="flex w-full cursor-pointer items-center gap-3 p-4 text-left"
                >
                  <Icon className="h-4 w-4 shrink-0 text-white" />

                  <span className="flex-1 font-bold text-white">{chapter.title}</span>

                  <AnimatePresence mode="wait" initial={false}>
                    {!isOpen && (
                      <motion.span
                        key="teaser"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="hidden text-xs text-white/40 sm:block"
                      >
                        {chapter.teaser}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="shrink-0 text-lg leading-none text-white/40 select-none"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5">
                        <div className="mb-3 h-px w-full bg-white/10" />
                        {chapter.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
