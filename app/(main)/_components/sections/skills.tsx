"use client";

import { useState } from "react";

import { hardSkills, softSkills } from "@/lib/skills-list";
import { SkillProps } from "@/lib/types/skill";
import Skill from "./_components/skill";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillProps | null>(null);

  const handleSkillClick = (skill: SkillProps) => {
    setSelectedSkill((prevSelected) => (prevSelected?.name === skill.name ? null : skill));
  };

  return (
    <section id="skills" className="flex scroll-mt-10 flex-col gap-2">
      <h2 className="text-2xl font-bold text-white">Skills</h2>
      <p className="text-white/80">
        Explore the skills that make me a versatile developer. Click any skill to learn more about how it shapes my
        work.
      </p>
      <div className="mt-2 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
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
        </div>
        <div className="flex flex-col gap-2">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
