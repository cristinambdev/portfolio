import type { FeaturedProjectsProps } from "../../types";
import ProjectCard from "../projects/ProjectCard";

export default function FeaturedProjects({
  projects,
  emptyMessage = "No projects found.",
}: FeaturedProjectsProps) {
  return (
    <section id="projects">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStacks={project.techStacks}
              links={project.links}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12 text-zinc-500 dark:text-zinc-400 font-mono">
            {emptyMessage}
          </div>
        )}
      </div>
    </section>
  );
}
