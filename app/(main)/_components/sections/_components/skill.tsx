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
        layout: { type: "spring", stiffness: 400, damping: 35 }
      }}
      className={cn(
        "border border-white/40 hover:bg-white/10 transition-colors select-none cursor-pointer",
        isSelected ? "w-full p-4 bg-white/5 rounded-2xl" : "rounded-full px-2 py-1"
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
                  className="w-10 h-10 select-none"
                  unoptimized
                  draggable={false}
                />
              ) : (
                <IconComponent className="w-10 h-10 text-white" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex flex-col justify-center min-w-0 flex-1">
          <h3 className={cn("text-white/80", isSelected ? "font-bold text-lg" : "text-sm")}>
            {skill.name}
          </h3>
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
                className="text-white/80 mt-1 text-sm overflow-hidden"
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
