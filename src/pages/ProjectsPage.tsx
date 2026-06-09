import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import CascadeWrapper from "../components/layouts/CascadeWrapper";
import ProjectFilter from "../components/projects/ProjectFilter";
import Projects from "../components/projects/Projects";
import { allTechStacks, projectsData } from "../constants/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleFilterClick = (filter: string) => {
    setActiveFilter((current) => (current === filter ? "All" : filter));
  };

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.techStacks.includes(activeFilter)
        );

  const emptyMessage =
    activeFilter === "All"
      ? "No projects found."
      : `No projects found for ${activeFilter}.`;

  return (
    <div className="container">

        <PageHeader title="Projects" highlight="" className="mb-8 md:mb-12" />

        <CascadeWrapper>
        <div className="cascade-item">
          <ProjectFilter
            allTechStacks={allTechStacks}
            activeFilter={activeFilter}
            onFilterChange={handleFilterClick}
          />
        </div>
      </CascadeWrapper>

        <Projects
          projects={filteredProjects}
          emptyMessage={emptyMessage}
          cascadeItems
        />
    </div>
  );
}
