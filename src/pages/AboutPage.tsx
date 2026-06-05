import PageHeader from "../components/common/PageHeader";
import AboutText from "../components/sections/AboutText";
import SkillsSection from "../components/sections/TechSkills";

export default function AboutPage() {
  return (
    <div className="container mx-auto">
       {/* Section Header */}
       <PageHeader
         title="About"
         highlight="Me"
       />

       {/*
         flex-col for mobile (stacked)
         lg:flex-row for desktop (side by side)
       */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-10">
         {/* Section Text */}
         <div className="lg:w-2/3">
           <AboutText />
         </div>

         {/* TechSkills */}
         <div className="lg:w-1/3">
           <SkillsSection />
         </div>

       </div>
    </div>
  );
}
