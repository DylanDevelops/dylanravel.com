import { Separator } from "@/components/ui/separator";
import { ProjectFilters } from "@/lib/types/project";
import Project from "./_components/project";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-2 scroll-mt-4">
      <h1 className="text-white font-bold text-2xl">Projects</h1>
      <p className="text-white/80">Learn about projects I have worked on.</p>
      <div className="flex flex-col gap-4">
        <Separator />
        <Project
          title="AIdentify"
          description="AIdentify, winning first place in the Technology/Education category at Chapman University's Spring 2025 Grand Challenges Initiative Showcase, focuses on teaching AI identification through repetition. By letting users play fun, interactive levels where they must spot the difference between AI and human generated content, users important recognition skills that help them look at the media they see everyday through a skeptic lens."
          date="2024-2025"
          tags={[ProjectFilters.Website, ProjectFilters.Game, ProjectFilters.Team, ProjectFilters.Awards]}
          githubLink="https://github.com/DylanDevelops/aidentify"
          websiteLink="https://playaidentify.com"
        />
        <Project
          title="PantherHacks 2025"
          description="Using Next.js, Tailwind, and TypeScript, the website for Chapman University's first student-run hackathon was created. The team consisted of 4 members, two programmers and two designers, who worked diligently to bring to life an event website that inspired students to create innovative projects."
          date="2024-2025"
          tags={[ProjectFilters.Website, ProjectFilters.Team]}
          githubLink="https://github.com/PantherHacks/pantherhacks.dev"
          websiteLink="https://pantherhacks.dev"
        />
        <Project
          title="Escape to the Squeakeasy"
          description="Created using Unity, Escape to the Squeakeasy is a game about a hamster off an alcoholic bender, attempts a daring escape to a bar known only to to the locals. It was created by a team of five students for their Objected Oriented Programming in C# class at Chapman University."
          date="2025"
          tags={[ProjectFilters.Game, ProjectFilters.Team]}
          itchLink="https://dylandevelops.itch.io/escape-to-the-squeakeasy"
        />
      </div>
    </section>
  );
};

export default Projects;
