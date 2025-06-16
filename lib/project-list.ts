import { ProjectProps, ProjectTag } from "./types/project";

export const projectList: ProjectProps[] = [
  {
    title: "AIdentify",
    date: "2024 - 2025",
    description:
      "AIdentify, winning first place in the Technology/Education category at Chapman University's Spring 2025 Grand Challenges Initiative Showcase, focuses on teaching AI identification through repetition. By letting users play fun, interactive levels where they must spot the difference between AI and human generated content, users important recognition skills that help them look at the media they see everyday through a skeptic lens.",
    tags: [ProjectTag.Website, ProjectTag.Game, ProjectTag.Team, ProjectTag.Awards],
    githubLink: "https://github.com/DylanDevelops/aidentify",
    websiteLink: "https://playaidentify.com",
  },
  {
    title: "PantherHacks 2025",
    date: "2024 - 2025",
    description:
      "Using Next.js, Tailwind, and TypeScript, the website for Chapman University's first student-run hackathon was created. The team consisted of 4 members, two programmers and two designers, who worked diligently to bring to life an event website that inspired students to create innovative projects.",
    tags: [ProjectTag.Website, ProjectTag.Team],
    githubLink: "https://github.com/pantherhacks/pantherhacks.dev",
    websiteLink: "https://pantherhacks.dev",
  },
  {
    title: "Escape to the Squeakeasy",
    date: "2024",
    description:
      "Created using Unity, Escape to the Squeakeasy is a game about a hamster off an alcoholic bender, attempts a daring escape to a bar known only to to the locals. It was created by a team of five students for their Objected Oriented Programming in C# class at Chapman University.",
    tags: [ProjectTag.Game, ProjectTag.Team],
    itchLink: "https://dylandevelops.itch.io/escape-to-the-squeakeasy",
  },
];
