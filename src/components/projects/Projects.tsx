import type { ProjectsProps } from "../../types";
import ProjectCard from "./ProjectCard";

export default function Projects({
  projects,
  emptyMessage = "No projects found.",
  cascadeItems = false,
}: ProjectsProps) {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {projects.map((project) => (
          <div key={project.title} className={cascadeItems ? "cascade-item" : undefined}>
            <ProjectCard
              title={project.title}
              description={project.description}
              techStacks={project.techStacks}
              links={project.links}
            />
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12 text-zinc-500 dark:text-zinc-400 font-mono">
          {emptyMessage}
        </div>
      )}
    </div>
  );
}
