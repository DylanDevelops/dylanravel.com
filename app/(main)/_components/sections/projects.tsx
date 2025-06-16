"use client";

import { useState } from "react";
import { CircleXIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { projectList } from "@/lib/project-list";
import { ProjectTag, ProjectTagIcons } from "@/lib/types/project";
import Project from "./_components/project";

const Projects = () => {
  const allTags = Object.values(ProjectTag);
  const [activeFilters, setActiveFilters] = useState<ProjectTag[]>([]);

  const filteredProjects =
    activeFilters.length === 0
      ? projectList
      : projectList.filter((project) => project.tags?.some((tag) => activeFilters.includes(tag)));

  return (
    <section id="projects" className="flex flex-col gap-2 scroll-mt-4">
      <h1 className="text-white font-bold text-2xl">Projects</h1>
      <p className="text-white/80">
        Learn about projects I have worked on. Use the buttons below to filter the shown projects.
      </p>
      <div className="flex flex-wrap gap-2 mb-2">
        {allTags.map((tag) => {
          const FilterIcon = ProjectTagIcons[tag];

          return (
            <button
              key={tag}
              className={`flex flex-row gap-2 items-center px-3 py-1 rounded-full border transition-all cursor-pointer
              ${
                activeFilters.includes(tag)
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-white/40 hover:bg-white/10"
              }
            `}
              onClick={() =>
                setActiveFilters((filters) =>
                  filters.includes(tag) ? filters.filter((f) => f !== tag) : [...filters, tag]
                )
              }
            >
              <FilterIcon className="w-4 h-4" /> {tag}
            </button>
          );
        })}
        {/* Clear Filters Button */}
        {activeFilters.length > 0 && (
          <button
            className="flex flex-row items-center gap-2 px-3 py-1 rounded-full border border-white/40 text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer"
            onClick={() => setActiveFilters([])}
          >
            <CircleXIcon className="w-4 h-4" /> Clear Filters
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <Separator />
        {filteredProjects.length === 0 ? (
          <p className="text-white/60 italic">No projects match the selected filters.</p>
        ) : (
          filteredProjects.map((project) => <Project key={project.title} {...project} />)
        )}
      </div>
    </section>
  );
};

export default Projects;
