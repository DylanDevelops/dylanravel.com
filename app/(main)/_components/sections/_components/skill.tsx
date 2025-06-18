import { SkillProps } from "@/lib/types/skill";

const SkillBadge = ({ skill }: { skill: SkillProps }) => {
  return (
    <button className="text-sm px-2 py-0.5 rounded-full border transition-colors select-none cursor-pointer transparent text-white/80 border-white/40 hover:bg-white/10">
      {skill.name}
    </button>
  );
};

export default SkillBadge;
