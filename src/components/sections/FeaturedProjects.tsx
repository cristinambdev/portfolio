import { useState } from "react";
import ProjectCard from "../projects/ProjectCard";
import { projectsData } from "../../constants/projects";

// Automatically extract all unique tech stacks from your data for the filter buttons
const allTechStacks = Array.from(
  new Set(projectsData.flatMap((project) => project.techStacks))
);

export default function FeaturedProjects() {
  // State to track the active filter (default is "All")
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Filter the projects based on the active state
  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((project) => project.techStacks.includes(activeFilter));

  return (
    <section id="projects">
      <div className="flex flex-col gap-12">



        {/* The Filter Badges */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 text-xs md:text-sm font-mono font-semibold uppercase tracking-widest rounded-full border transition-all ${
              activeFilter === "All"
                ? "bg-brand-green text-white border-brand-green shadow-md"
                : "bg-white text-zinc-500 border-zinc-200 hover:border-brand-green/50 hover:text-brand-green"
            }`}
          >
            All
          </button>

          {allTechStacks.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(tech)}
              className={`px-4 py-2 text-xs md:text-sm font-mono font-semibold uppercase tracking-widest rounded-full border transition-all ${
                activeFilter === tech
                  ? "bg-brand-green text-white border-brand-green shadow-md"
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-brand-green/50 hover:text-brand-green"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* The CSS Grid for the Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStacks={project.techStacks}
              links={project.links}
            />
          ))}
        </div>

        {/* Fallback Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-zinc-500 font-mono">
            No projects found for {activeFilter}.
          </div>
        )}

      </div>
    </section>
  );
}
