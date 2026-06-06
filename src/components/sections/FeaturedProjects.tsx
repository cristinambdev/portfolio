import type { FeaturedProjectsProps } from "../../types";
import { featuredProjects } from "../../constants/projects";
import PageHeader from "../common/PageHeader";
import Projects from "../projects/Projects";

export default function FeaturedProjects({
  emptyMessage = "No featured projects found.",
}: FeaturedProjectsProps) {
  return (
    <section id="featured-projects" scroll-mt-24 pt-12 md:pt-20 pb-20 md:pb-32>
      <PageHeader title="Featured" highlight="Projects" />
      <Projects projects={featuredProjects} emptyMessage={emptyMessage} />
    </section>
  );
}
