import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import type { FeaturedProjectsProps } from "../../types";
import { featuredProjects } from "../../constants/projects";
import PageHeader from "../common/PageHeader";
import Projects from "../projects/Projects";
import CascadeWrapper from "../layouts/CascadeWrapper";

export default function FeaturedProjects({
  emptyMessage = "No featured projects found.",
}: FeaturedProjectsProps) {
  return (
    <CascadeWrapper>
      <section
        id="featured-projects"
        className="scroll-mt-24 pt-12 md:pt-20 pb-20 md:pb-32"
      >
        <PageHeader title="Featured" highlight="Projects" className="cascade-item mb-8 md:mb-12" />
        <Projects projects={featuredProjects} emptyMessage={emptyMessage} cascadeItems />
        <div className="cascade-item text-start px-6 text-zinc-500 dark:text-zinc-400 font-mono">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-6 text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-brand-green dark:hover:text-brand-green hover:underline hover:decoration-brand-green underline-offset-4 transition-all group cursor-pointer focus:outline-none"
          >
            More projects
            <FaArrowRight
              size={16}
              className="transform transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </CascadeWrapper>
  );
}
