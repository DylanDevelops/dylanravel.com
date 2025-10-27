import { ProjectProps, ProjectTag } from "./types/project";

export const projectList: ProjectProps[] = [
  {
    title: "PantherGuessr",
    date: "2024 - PRESENT",
    description:
      "Created by a team of two and inspired by GeoGuessr, PantherGuessr is a locational identification game where users must guess where photos were taken around Chapman University's campus. While still a work in progress, it has shown immense popularity by testers.",
    tags: [ProjectTag.Website, ProjectTag.Game, ProjectTag.Team],
    githubLink: "https://github.com/PantherGuessr/PantherGuessr",
    websiteLink: "https://pantherguessr.com",
  },
  {
    title: "Cloudr",
    date: "2025",
    description:
      "Cloudr is your thought cloud companion. Save ideas, notes, reminders, and events easily through a sleek and intuitive chat experience. Created at the CalHacks 12.0 hackathon, Cloudr uses Swift and Anthropic's Claude Haiku 4.5 to intelligently classify user input into the appropriate category, whether that's a note, task, or event. The app features voice and camera input, Apple Calendar integration, and an intuitive sorting interface for organizing unsorted items through simple swipe gestures.",
    tags: [ProjectTag.App, ProjectTag.Team],
    websiteLink: "https://devpost.com/software/cloudr",
  },
  {
    title: "AIdentify",
    date: "2024 - 2025",
    description:
      "AIdentify, winning first place in the Technology/Education category at Chapman University's Spring 2025 Grand Challenges Initiative Showcase, focuses on teaching AI identification through repetition. By letting users play fun, interactive levels where they must spot the difference between AI and human-generated content, users learn important recognition skills that help them look at the media they see daily through a skeptical lens.",
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
      "Created using Unity, Escape to the Squeakeasy is a game about a hamster on an alcoholic bender, who attempts a daring escape to a bar known only to the locals. It was created by a team of five students for their Object-Oriented Programming in C# class at Chapman University.",
    tags: [ProjectTag.Game, ProjectTag.Team],
    itchLink: "https://dylandevelops.itch.io/escape-to-the-squeakeasy",
  },
  {
    title: "The Obsessive Shadow",
    date: "2022 - 2024",
    description:
      "You hear a knock at your window and the lights go out; What do you do? This VR horror game puts the player through encounters with a shadow creature stalking them in their home. Created while with Sleepy Dog Studios, The Obsessive Shadow won the Indie Games Expo 2023 Player's Choice Award and amassed over 50,000 downloads on Steam and the Meta Quest Store while being part of the Oculus Start Program.",
    tags: [ProjectTag.Game, ProjectTag.Team, ProjectTag.Awards],
  },
  {
    title: "Choose Your Own Dylan",
    date: "2023",
    description: `Play as Dylan, making crucial decisions throughout his life journey to unlock different endings. Created using Unity for my senior year solo project for my theatre class, I chose to explore the world of game development as an interactive piece with the audience. The prompt for the project was to choose a topic that plagued or fascinated us. Since I had decided not to go into theatre at this point, I created a "performance" that incorporated my game development and theatrical skills.`,
    tags: [ProjectTag.Game, ProjectTag.Solo],
    itchLink: "https://dylandevelops.itch.io/choose-your-own-dylan",
  },
  {
    title: "Notion to Outlook",
    date: "2023",
    description:
      "Using Node.js, Notion to Outlook automatically syncs your Notion Calendar with Outlook Calendar to create a seamless integration tool. It runs automatically using GitHub Actions on a scheduled basis. It was created to organize school assignments.",
    tags: [ProjectTag.Tool, ProjectTag.Solo],
    githubLink: "https://github.com/DylanDevelops/notion-to-outlook",
  },
];
