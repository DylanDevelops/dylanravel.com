import { hardSkills, softSkills } from "@/lib/skills-list";
import SkillBadge from "./_components/skill";

const Skills = () => {
  const totalSkills = softSkills.length + hardSkills.length;

  return (
    <section id="skills" className="flex flex-col gap-2 scroll-mt-10">
      <h2 className="text-white font-bold text-2xl">Skills</h2>
      <p className="text-white/80">
        Learn about {totalSkills} skill{totalSkills > 1 ? "s" : ""} that make{totalSkills === 1 ? "s" : ""} me a
        well-rounded developer. Click on a skill to learn more about it.
      </p>
      <div className="flex flex-col gap-8 mt-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold text-xl">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {hardSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold text-xl">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
