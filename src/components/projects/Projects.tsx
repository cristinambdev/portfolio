import type { ProjectsProps } from "../../types";
import ProjectCard from "./ProjectCard";
import CascadeWrapper from "../layouts/CascadeWrapper";

export default function Projects({
  projects,
  emptyMessage = "No projects found.",
  cascadeItems = false,
}: ProjectsProps) {
  return (
    <div className="flex flex-col gap-12 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
      {projects.map((project, index) => {

          // Card content with dynamic delay
          const cardContent = (
            <div
              className={cascadeItems ? "cascade-item h-full" : "h-full"}
              // Stagger the columns: 0ms, 150ms, 300ms
              style={cascadeItems ? { transitionDelay: `${(index % 3) * 150}ms` } : undefined}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                techStacks={project.techStacks}
                links={project.links}
              />
            </div>
          );

          // Wrap if animations are turned on
          return cascadeItems ? (
            <CascadeWrapper key={project.title}>
              {cardContent}
            </CascadeWrapper>
          ) : (
            <div key={project.title}>{cardContent}</div>
          );
        })}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12 text-zinc-500 dark:text-zinc-400 font-mono">
          {emptyMessage}
        </div>
      )}
    </div>
  );
}
