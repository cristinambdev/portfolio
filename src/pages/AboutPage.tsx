import PageHeader from "../components/common/PageHeader";
import AboutText from "../components/sections/AboutText";

export default function AboutPage() {
  return (
    <div className="container">

       {/* Section Header */}
        <PageHeader
         title="About"
         highlight="Me"
       />

      {/* Section Text */}
      <AboutText />
</div>
  )
};
