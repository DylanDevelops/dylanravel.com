import {
  BrainCircuitIcon,
  BrainCogIcon,
  BriefcaseBusinessIcon,
  DatabaseIcon,
  GraduationCapIcon,
  HandshakeIcon,
  HourglassIcon,
  KanbanSquareIcon,
  MegaphoneIcon,
  MessageCircleQuestionIcon,
  PuzzleIcon,
  SearchCheckIcon,
  SquareKanbanIcon,
  ToolCaseIcon,
  UserRoundSearchIcon,
  Users2Icon,
  UsersRoundIcon,
  ViewIcon,
  WaypointsIcon,
  WebhookIcon,
  WorkflowIcon,
} from "lucide-react";

import { SkillProps } from "./types/skill";

export const softSkills: SkillProps[] = [
  {
    name: "Project Management",
    icon: KanbanSquareIcon,
    description:
      "Skilled in planning, organizing, and overseeing projects to ensure timely delivery, effective collaboration, and achievement of objectives.",
  },
  {
    name: "Technical Leadership",
    icon: UsersRoundIcon,
    description:
      "Leads development teams and manages technical direction, having spearheaded programming for 50,000+ download VR game demo and led teams of 6+ developers.",
  },
  {
    name: "Agile/Scrum",
    icon: SquareKanbanIcon,
    description:
      "Manages projects using Agile methodologies and Scrum frameworks to ensure iterative delivery and team alignment.",
  },
  {
    name: "Team Collaboration",
    icon: Users2Icon,
    description:
      "Experienced in working effectively within cross-functional teams, fostering open communication and shared problem-solving.",
  },
  {
    name: "Mentorship",
    icon: GraduationCapIcon,
    description:
      "Guides junior developers and new developers through code reviews, workshops, and collaborative learning.",
  },
  {
    name: "Cross-Disciplinary Collaboration",
    icon: ToolCaseIcon,
    description:
      "Bridges technical and creative domains, bringing theatre arts experience to collaborative software development.",
  },
  {
    name: "Entrepreneurship",
    icon: BriefcaseBusinessIcon,
    description:
      "Founded and manage Ravision Tech LLC, developing business strategies and leading innovative technology projects from concept to execution.",
  },
  {
    name: "Client Relations",
    icon: HandshakeIcon,
    description:
      "Manages client communications, project scoping, and invoicing for Ravision Tech LLC's web development and game projects.",
  },
  {
    name: "Creative Thinking",
    icon: BrainCogIcon,
    description:
      "Adept at generating innovative ideas and solutions for design, development, and user experience challenges.",
  },
  {
    name: "Adaptability",
    icon: WaypointsIcon,
    description: "Quick to learn new technologies and adapt to changing project requirements or creative directions.",
  },
  {
    name: "Communication",
    icon: MegaphoneIcon,
    description:
      "Strong written and verbal communication skills for articulating technical concepts to diverse audiences.",
  },
  {
    name: "Problem Solving",
    icon: PuzzleIcon,
    description:
      "Proficient at analyzing complex issues and developing effective, efficient solutions in programming and design.",
  },
  {
    name: "Time Management",
    icon: HourglassIcon,
    description:
      "Efficient at prioritizing tasks and managing deadlines in fast-paced development and creative environments.",
  },
  {
    name: "Attention to Detail",
    icon: ViewIcon,
    description: "Meticulous in reviewing code, designs, and assets to ensure high quality and consistency.",
  },
  {
    name: "Code Review & QA",
    icon: SearchCheckIcon,
    description:
      "Implements robust code review processes to ensure high-quality, performant, and maintainable codebases.",
  },
  {
    name: "User-Centered Mindset",
    icon: UserRoundSearchIcon,
    description:
      "Focused on understanding user needs and delivering intuitive, engaging experiences in software and design.",
  },
  {
    name: "Feedback Receptiveness",
    icon: MessageCircleQuestionIcon,
    description:
      "Open to constructive criticism and able to iterate on work based on feedback from peers and stakeholders.",
  },
];

export const hardSkills: SkillProps[] = [
  {
    name: "C#",
    icon: "/icons/csharp.svg",
    description: "Proficient in C# for application and game development, especially with Unity.",
  },
  {
    name: "Java",
    icon: "/icons/java.svg",
    description: "Experienced in building robust backend systems and Android applications using Java.",
  },
  {
    name: "C++",
    icon: "/icons/cplusplus.svg",
    description: "Skilled in C++ for high-performance applications and game development, including Unreal Engine.",
  },
  {
    name: "Swift",
    icon: "/icons/swift.svg",
    description: "Builds native iOS applications with Swift, including integration with Apple frameworks and APIs.",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    description: "Develops dynamic and responsive user interfaces with React and related libraries.",
  },
  {
    name: "HTML/CSS",
    icon: "/icons/htmlcss.svg",
    description: "Expertise in crafting semantic, accessible, and visually appealing web pages using HTML and CSS.",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
    description: "Rapidly builds responsive, modern interfaces using Tailwind's utility-first CSS framework.",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    description: "Writes robust, type-safe JavaScript applications using TypeScript.",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    description: "Experienced in modern JavaScript (ES6+) for web and server-side development.",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    description: "Builds performant, SEO-friendly web applications with Next.js.",
  },
  {
    name: "Unity",
    icon: "/icons/unity.svg",
    description: "Develops interactive 2D and 3D games and experiences using Unity.",
  },
  {
    name: "Unreal Engine",
    icon: "/icons/unreal-engine.svg",
    description: "Creates high-fidelity games and simulations with Unreal Engine and Blueprints.",
  },
  {
    name: "Blender",
    icon: "/icons/blender.svg",
    description: "Designs and animates 3D models and assets using Blender.",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
    description: "Uses Git for version control, branching, and collaborative software development.",
  },
  {
    name: "GitHub",
    icon: "/icons/github.svg",
    description: "Manages repositories, code reviews, and project collaboration using GitHub.",
  },
  {
    name: "CI/CD Pipelines",
    icon: WorkflowIcon,
    description: "Implements automated testing and deployment workflows using GitHub Actions and other CI/CD tools.",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    description: "Builds scalable backend services and APIs with Node.js.",
  },
  {
    name: "Google Firebase",
    icon: "/icons/firebase.svg",
    description: "Leverages Firebase for authentication, real-time databases, cloud storage, and serverless functions.",
  },
  {
    name: "Convex",
    icon: "/icons/convex.svg",
    description:
      "Architects reactive backend systems using Convex for real-time data synchronization and serverless functions.",
  },
  {
    name: "SQL",
    icon: DatabaseIcon,
    description: "Designs and queries relational databases using SQL for data management and analysis.",
  },
  {
    name: "REST APIs",
    icon: WebhookIcon,
    description: "Designs and implements RESTful APIs for scalable client-server communication.",
  },
  {
    name: "LLM APIs",
    icon: BrainCircuitIcon,
    description:
      "Integrates large language model APIs (Claude, OpenAI) to build AI-powered features and intelligent applications.",
  },
  {
    name: "Python",
    icon: "/icons/python.svg",
    description: "Uses Python for scripting, automation, and data processing tasks.",
  },
  {
    name: "Linux",
    icon: "/icons/linux.svg",
    description: "Comfortable working in Linux environments for development and deployment.",
  },
  {
    name: "Figma",
    icon: "/icons/figma.svg",
    description: "Designs user interfaces and prototypes collaboratively using Figma.",
  },
  {
    name: "Adobe Products",
    icon: "/icons/adobe.svg",
    description:
      "Skilled in Photoshop, Premiere Pro, Illustrator, and other Adobe Creative Cloud tools for graphic and UI design.",
  },
];
