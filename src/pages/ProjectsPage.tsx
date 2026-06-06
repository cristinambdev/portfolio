import { useState } from "react";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import PageHeader from "../components/common/PageHeader";
import ProjectFilter from "../components/projects/ProjectFilter";
import { allTechStacks, projectsData } from "../constants/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.techStacks.includes(activeFilter)
        );

  const handleFilterClick = (filter: string) => {
    setActiveFilter((current) => (current === filter ? "All" : filter));
  };

  return (
    <div className="flex flex-col gap-12">
      <PageHeader title="Featured" highlight="Projects" />

      <ProjectFilter
        allTechStacks={allTechStacks}
        activeFilter={activeFilter}
        onFilterChange={handleFilterClick}
      />

      <FeaturedProjects
        projects={filteredProjects}
        emptyMessage={`No projects found for ${activeFilter}.`}
      />
    </div>
  );
}
