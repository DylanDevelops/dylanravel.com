/**
 * Enum representing the available filters for projects.
 *
 * @remarks
 * This enum is used to categorize projects based on their type or team structure.
 *
 * @enum
 * @property {string} Game - Represents game projects.
 * @property {string} Website - Represents website projects.
 * @property {string} Tool - Represents tool projects.
 * @property {string} Solo - Represents projects completed individually.
 * @property {string} Team - Represents projects completed as part of a team.
 * @property {string} Awards - Represents projects that have won award(s).
 */
export enum ProjectFilters {
  Game = "game",
  Website = "website",
  Tool = "tool",
  Solo = "solo",
  Team = "team",
  Awards = "awards",
}

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
  tags?: ProjectFilters[];
  githubLink?: string;
  websiteLink?: string;
  itchLink?: string;
  steamLink?: string;
};
