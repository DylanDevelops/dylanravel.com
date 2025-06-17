import { ProjectProps, ProjectTag } from "./types/project";

export const projectList: ProjectProps[] = [
  {
    title: "PantherGuessr",
    date: "2024 - PRESENT",
    description:
      "Created by a team of two and inspired by GeoGuessr, PantherGuessr is a locational identification game where users must guess where photos were taken around Chapman University's campus. While still a work in progress, it has shown immense popularity by testers.",
    tags: [ProjectTag.Website, ProjectTag.Game, ProjectTag.Team],
    githubLink: "https://github.com/PantherGuessr/PantherGuessr",
  },
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
    title: "Room Spin!",
    date: "2025",
    description: `With the theme, "spin", a game was created for the Boss Rush 2025 Game Jam where you must fight bosses whose attacks spin the entire room, forcing you to adapt to new layouts during the fight. It was created using Unity by a team of four developers and features an original soundtrack.`,
    tags: [ProjectTag.Game, ProjectTag.Team],
    itchLink: "https://moontyzoo.itch.io/room-spin",
  },
  {
    title: "Escape to the Squeakeasy",
    date: "2024",
    description:
      "Created using Unity, Escape to the Squeakeasy is a game about a hamster off an alcoholic bender, attempts a daring escape to a bar known only to to the locals. It was created by a team of five students for their Objected Oriented Programming in C# class at Chapman University.",
    tags: [ProjectTag.Game, ProjectTag.Team],
    itchLink: "https://dylandevelops.itch.io/escape-to-the-squeakeasy",
  },
  {
    title: "The Obsessive Shadow",
    date: "2022 - 2024",
    description:
      "You hear a knock at your window and the lights go out; What do you do? This VR horror game puts the player through different encounters with a shadow creature that is stalking you in your home. Created while with Sleepy Dog Studios, The Obsessive Shadow won the Indie Games Expo 2023 Player's Choice Award and amassed over 50,000 downloads while being part of the Oculus Start Program.",
    tags: [ProjectTag.Game, ProjectTag.Team, ProjectTag.Awards],
  },
  {
    title: "Choose Your Own Dylan",
    date: "2023",
    description: `Play as Dylan, making crucial decisions throughout the journey of his life to unlock different endings. Created using Unity for my senior year solo project for my theatre class, I chose to explore the world of game development as an interaction piece with the audience. The prompt for the project was to choose a topic that plagued or fascinated us. Since at this point I had decided I wanted to go into theatre, I created a "performance" that incorporated my game development and theatrical skills.`,
    tags: [ProjectTag.Game, ProjectTag.Solo],
    itchLink: "https://dylandevelops.itch.io/choose-your-own-dylan",
  },
  {
    title: "Notion to Outlook",
    date: "2023",
    description:
      "Using Node.js, Notion to Outlook automatically syncs your Notion Calendar with Outlook Calendar to create a seamless integration tool. It runs automatically using GitHub actions on a scheduled basis. It was created to organize school assignments.",
    tags: [ProjectTag.Tool, ProjectTag.Solo],
    githubLink: "https://github.com/DylanDevelops/notion-to-outlook",
  },
];
