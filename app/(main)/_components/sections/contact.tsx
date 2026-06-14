"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { PortfolioConstants } from "@/lib/branding";

const Contact = () => {
  return (
    <section id="contact" className="flex scroll-mt-10 flex-col gap-2">
      <motion.div
        className="flex flex-col gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h2
          className="text-2xl font-bold text-white"
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
        >
          Contact
        </motion.h2>
        <motion.div
          className="flex flex-col gap-1"
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
        >
          <p className="text-white/80">Let&apos;s get in touch! Send me a message:</p>
          <Link
            href={`mailto:${PortfolioConstants.Email}`}
            className="relative self-start text-lg text-white/90 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:block after:h-[2px] after:w-0 after:rounded-2xl after:bg-white after:transition-all after:duration-300 after:content-[''] hover:text-white/75 hover:after:w-full"
          >
            {PortfolioConstants.Email}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
