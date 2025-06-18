import { LucideIcon } from "lucide-react";

/**
 * Represents the properties of a skill item.
 *
 * @property name - The name or title of the skill.
 * @property icon - The icon representing the skill, which can be a string (URL) or a LucideIcon component.
 * @property description - A brief description of the skill.
 */
export type SkillProps = {
  name: string;
  icon: string | LucideIcon;
  description: string;
};
