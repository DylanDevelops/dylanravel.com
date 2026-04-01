"use client";

import { motion } from "framer-motion";

import "./_components/hello.css";

import { PortfolioConstants } from "@/lib/branding";

const Hello = () => {
  const headerText = `Hi, I'm ${PortfolioConstants.FirstName}!`.split("");
  const wavingEmoji = "👋";

  return (
    <section id="hello" className="flex scroll-mt-10 flex-col gap-4">
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        {headerText.map((char, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {char}
          </motion.span>
        ))}{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            rotate: [0, 15, -15, 15, 0],
          }}
          transition={{
            opacity: {
              duration: 0.25,
              delay: headerText.length / 10,
            },
            rotate: {
              duration: 1,
              repeat: 2,
              repeatType: "mirror",
            },
          }}
          key="emoji"
          style={{ display: "inline-block" }}
        >
          {wavingEmoji}
        </motion.span>
      </h2>
      <motion.p
        className="text-lg font-bold text-white/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: headerText.length * 0.1 + 1,
        }}
      >
        Game Developer • Programmer • Research Assistant • Student
      </motion.p>
    </section>
  );
};

export default Hello;
