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
      layout="position"
      onClick={() => onClick(skill)}
      transition={{
        layout: { type: "spring", stiffness: 400, damping: 35 },
      }}
      className={cn(
        "cursor-pointer border border-white/40 transition-colors select-none hover:bg-white/10",
        isSelected ? "w-full rounded-2xl bg-white/5 p-4" : "rounded-full px-2 py-1"
      )}
    >
      <div className="flex items-center gap-4">
        <AnimatePresence initial={false} mode="popLayout">
          {isSelected && (
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto", transition: { duration: 0.15 } }}
              exit={{ opacity: 0, width: 0, transition: { duration: 0.1 } }}
            >
              {typeof skill.icon === "string" ? (
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={40}
                  height={40}
                  className="h-10 w-10 select-none"
                  unoptimized
                  draggable={false}
                />
              ) : (
                <IconComponent className="h-10 w-10 text-white" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h3 className={cn("text-white/80", isSelected ? "text-lg font-bold" : "text-sm")}>{skill.name}</h3>
          <AnimatePresence initial={false} mode="popLayout">
            {isSelected && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.1 },
                }}
                className="mt-1 overflow-hidden text-sm text-white/80"
              >
                {skill.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
