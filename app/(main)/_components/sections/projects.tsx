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
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus illo illum beatae obcaecati delectus officia, earum quas ullam eligendi ratione! Reiciendis facilis, perferendis repellat quidem atque iste sequi. Itaque."
          date="2024-2025"
          tags={[ProjectFilters.Website, ProjectFilters.Game, ProjectFilters.Team]}
          githubLink="https://github.com/DylanDevelops/aidentify"
          websiteLink="https://playaidentify.com"
        />
        <Project
          title="PantherHacks 2025"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus illo illum beatae obcaecati delectus officia, earum quas ullam eligendi ratione! Reiciendis facilis, perferendis repellat quidem atque iste sequi. Itaque."
          date="2024-2025"
          tags={[ProjectFilters.Website, ProjectFilters.Team]}
          githubLink="https://github.com/PantherHacks/pantherhacks.dev"
          websiteLink="https://pantherhacks.dev"
        />
        <Project
          title="Escape to the Squeakeasy"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus illo illum beatae obcaecati delectus officia, earum quas ullam eligendi ratione! Reiciendis facilis, perferendis repellat quidem atque iste sequi. Itaque."
          date="2025"
          tags={[ProjectFilters.Game, ProjectFilters.Team]}
          itchLink="https://dylandevelops.itch.io/escape-to-the-squeakeasy"
        />
      </div>
    </section>
  );
};

export default Projects;
