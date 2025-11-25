import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import { SkillProps } from "@/lib/types/skill";
import { cn } from "@/lib/utils";

const Skill = ({
  skill,
  isSelected,
  onClick,
}: {
  skill: SkillProps;
  isSelected: boolean;
  onClick: (skill: SkillProps) => void;
}) => {
  const IconComponent = skill.icon as LucideIcon;

  return (
    <motion.div
      layout
      onClick={() => onClick(skill)}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn(
        "border border-white/40 hover:bg-white/10 transition-colors select-none cursor-pointer",
        isSelected ? "w-full p-4 bg-white/5 rounded-2xl" : "rounded-full"
      )}
    >
      <motion.div layout="position" className="flex items-center gap-4">
        {isSelected && (
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
          >
            {typeof skill.icon === "string" ? (
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={40}
                height={40}
                className="w-10 h-10 select-none"
                unoptimized
                draggable={false}
              />
            ) : (
              <IconComponent className="w-10 h-10 text-white" />
            )}
          </motion.div>
        )}
        <div className="flex flex-col justify-center min-w-0">
          <motion.h3
            layout="position"
            className={cn("text-white/80", isSelected ? "font-bold text-lg" : "text-sm px-2 py-0.5")}
          >
            {skill.name}
          </motion.h3>
          <AnimatePresence>
            {isSelected && (
              <motion.p
                initial={{ opacity: 0, maxHeight: 0 }}
                animate={{
                  opacity: 1,
                  maxHeight: "500rem",
                  transition: { delay: 0.2, ease: "easeOut", duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  maxHeight: 0,
                  transition: { duration: 0.1 },
                }}
                className="text-white/80 mt-1 text-sm"
              >
                {skill.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skill;
