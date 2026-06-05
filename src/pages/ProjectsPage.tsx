import FeaturedProjects from "../components/sections/FeaturedProjects";
import PageHeader from "../components/common/PageHeader";

export default function ProjectsPage() {

  return (

    <>
       <div className="container">
        {/* Section Header */}
        <PageHeader
          title="Featured"
          highlight="Projects"
        />

        <FeaturedProjects />
       </div>

    </>

  );
}
