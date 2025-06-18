"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { hardSkills, softSkills } from "@/lib/skills-list";
import { SkillProps } from "@/lib/types/skill";
import Skill from "./_components/skill";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillProps | null>(null);

  const handleSkillClick = (skill: SkillProps) => {
    setSelectedSkill((prevSelected) => (prevSelected?.name === skill.name ? null : skill));
  };

  return (
    <section id="skills" className="flex flex-col gap-2 scroll-mt-10">
      <h2 className="text-white font-bold text-2xl">Skills</h2>
      <p className="text-white/80">
        Explore the skills that make me a versatile developer. Click any skill to learn more about how it shapes my
        work.
      </p>
      <div className="flex flex-col gap-8 mt-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold text-xl">Technical Skills</h3>
          <motion.div layout className="flex flex-wrap gap-2 items-start">
            {hardSkills.map((skill) => (
              <Skill
                key={skill.name}
                skill={skill}
                isSelected={selectedSkill?.name === skill.name}
                onClick={handleSkillClick}
              />
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold text-xl">Soft Skills</h3>
          <motion.div layout className="flex flex-wrap gap-2 items-start">
            {softSkills.map((skill) => (
              <Skill
                key={skill.name}
                skill={skill}
                isSelected={selectedSkill?.name === skill.name}
                onClick={handleSkillClick}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
