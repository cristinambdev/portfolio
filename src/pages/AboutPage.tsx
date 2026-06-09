import PageHeader from "../components/common/PageHeader";
import Socials from "../components/common/Socials";
import AboutText from "../components/sections/AboutText";
import SkillsSection from "../components/sections/TechSkills";



export default function AboutPage() {

  return (

    <div className="container">

       {/* Section Header */}
        <PageHeader
         title="About"
         highlight="Me"
       />


      {/* Socials */}
       <Socials animated={true} platforms={["linkedin"]} className="mb-4" />

       {/* flex-col for mobile (stacked)
         lg:flex-row for desktop (side by side) */}

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-10 pb-10">
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

