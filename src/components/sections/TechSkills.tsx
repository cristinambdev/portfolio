import { skillsData } from "../../constants/skills";
import CascadeWrapper from "../layouts/CascadeWrapper";

export default function TechSkills() {
  return (
    <CascadeWrapper>
      <section className="pb-12 md:pb-20">
        <div className="flex flex-col gap-10">
          {skillsData.map((group, index) => (
            <div key={index} className="cascade-item flex flex-col gap-4">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 text-xs md:text-sm font-mono font-semibold uppercase tracking-widest rounded-lg border border-brand-green/30 bg-brand-green/5 text-brand-green hover:bg-brand-green hover:text-white transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </CascadeWrapper>
  );
}
