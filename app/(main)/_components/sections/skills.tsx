"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { hardSkills, softSkills } from "@/lib/skills-list";
import { SkillProps } from "@/lib/types/skill";
import Skill from "./_components/skill";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillProps | null>(null);

  const handleSkillClick = (skill: SkillProps) => {
    setSelectedSkill((prevSelected) => (prevSelected?.name === skill.name ? null : skill));
  };

  return (
    <section id="skills" className="flex scroll-mt-10 flex-col gap-2">
      <motion.div
        className="flex flex-col gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.h2 className="text-2xl font-bold text-white" variants={fadeUp}>
          Skills
        </motion.h2>
        <motion.p className="text-white/80" variants={fadeUp}>
          Explore the skills that make me a versatile developer. Click any skill to learn more about how it shapes my
          work.
        </motion.p>
        <motion.div
          className="mt-2 flex flex-col gap-8"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex flex-col gap-2" variants={fadeUp}>
            <h3 className="text-xl font-bold text-white">Technical Skills</h3>
            <div className="flex flex-wrap items-start gap-2">
              {hardSkills.map((skill) => (
                <Skill
                  key={skill.name}
                  skill={skill}
                  isSelected={selectedSkill?.name === skill.name}
                  onClick={handleSkillClick}
                />
              ))}
            </div>
          </motion.div>
          <motion.div className="flex flex-col gap-2" variants={fadeUp}>
            <h3 className="text-xl font-bold text-white">Soft Skills</h3>
            <div className="flex flex-wrap items-start gap-2">
              {softSkills.map((skill) => (
                <Skill
                  key={skill.name}
                  skill={skill}
                  isSelected={selectedSkill?.name === skill.name}
                  onClick={handleSkillClick}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
