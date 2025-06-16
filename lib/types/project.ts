import { Gamepad2Icon, GlobeIcon, LucideIcon, TrophyIcon, UserIcon, UsersIcon, WrenchIcon } from "lucide-react";

/**
 * Represents the various tags that can be associated with a project.
 *
 * @enum {string}
 * @property {string} Game - Indicates the project is a game.
 * @property {string} Website - Indicates the project is a website.
 * @property {string} Tool - Indicates the project is a tool.
 * @property {string} Solo - Indicates the project was completed solo.
 * @property {string} Team - Indicates the project was completed as part of a team.
 * @property {string} Awards - Indicates the project has received awards.
 */
export enum ProjectTag {
  Game = "game",
  Website = "website",
  Tool = "tool",
  Solo = "solo",
  Team = "team",
  Awards = "awards",
}

/**
 * A mapping of project tag names to their corresponding Lucide icon components.
 *
 * Each key in the object represents a project tag (such as "game", "website", "tool", etc.),
 * and the value is a LucideIcon component that visually represents the tag.
 *
 * @example
 * // Get the icon for a ProjectTags.Game project tag
 * const gameIcon = ProjectTagIcons[ProjectTags.Game];
 *
 * @example
 * // Get the icon for a "game" project tag
 * const gameIcon = ProjectTagIcons["game"];
 *
 * @remarks
 * This object is useful for dynamically rendering icons based on project tags in the UI.
 */
export const ProjectTagIcons: { [projectTag: string]: LucideIcon } = {
  game: Gamepad2Icon,
  website: GlobeIcon,
  tool: WrenchIcon,
  solo: UserIcon,
  team: UsersIcon,
  awards: TrophyIcon,
};

/**
 * Represents the properties of a project.
 *
 * @property title - The title of the project.
 * @property thumbnailUrl - (Optional) The URL of the project's thumbnail image.
 * @property date - The date associated with the project (e.g., creation or release date).
 * @property description - A brief description of the project.
 * @property tags - (Optional) An array of tags or filters associated with the project.
 * @property githubLink - (Optional) The URL to the project's GitHub repository.
 * @property websiteLink - (Optional) The URL to the project's website.
 * @property itchLink - (Optional) The URL to the project's itch.io page.
 * @property steamLink - (Optional) The URL to the project's Steam page.
 */
export type ProjectProps = {
  title: string;
  thumbnailUrl?: string;
  date: string;
  description: string;
  tags?: ProjectTag[];
  githubLink?: string;
  websiteLink?: string;
  itchLink?: string;
  steamLink?: string;
};
