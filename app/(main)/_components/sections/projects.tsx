"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleXIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { projectList } from "@/lib/project-list";
import { ProjectTag, ProjectTagIcons } from "@/lib/types/project";
import { cn } from "@/lib/utils";
import Project from "./_components/project";

const Projects = () => {
  const allTags = Object.values(ProjectTag);
  const [activeFilters, setActiveFilters] = useState<ProjectTag[]>([]);

  const filteredProjects =
    activeFilters.length === 0
      ? projectList
      : projectList.filter((project) => project.tags?.some((tag) => activeFilters.includes(tag)));

  return (
    <section id="projects" className="flex scroll-mt-10 flex-col gap-2">
      <h2 className="text-2xl font-bold text-white">Projects</h2>
      <p className="text-white/80">
        Learn about {filteredProjects.length} project{filteredProjects.length > 1 && "s"} that I have worked on. Use the
        buttons below to filter the shown projects.
      </p>
      <div className="mb-2 flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const FilterIcon = ProjectTagIcons[tag];

          return (
            <button
              key={tag}
              className={cn(
                "flex cursor-pointer flex-row items-center gap-2 rounded-full border px-3 py-1 transition-all select-none",
                activeFilters.includes(tag)
                  ? "border-white bg-white text-black"
                  : "border-white/40 bg-transparent text-white hover:bg-white/10"
              )}
              onClick={() =>
                setActiveFilters((filters) =>
                  filters.includes(tag) ? filters.filter((f) => f !== tag) : [...filters, tag]
                )
              }
            >
              <FilterIcon className="h-4 w-4" /> {tag}
            </button>
          );
        })}
        {activeFilters.length > 0 && (
          <button
            className="flex cursor-pointer flex-row items-center gap-2 rounded-full border border-white/40 bg-red-600 px-3 py-1 text-white transition-all select-none hover:bg-red-700"
            onClick={() => setActiveFilters([])}
          >
            <CircleXIcon className="h-4 w-4" /> Clear Filters
          </button>
        )}
      </div>
      <motion.div layout transition={{ duration: 0.5, type: "spring" }} className="flex flex-col gap-4">
        <Separator />
        <AnimatePresence>
          {filteredProjects.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white/60 italic"
            >
              No projects match the selected filters.
            </motion.p>
          ) : (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: index * 0.1 },
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              >
                <Project {...project} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
