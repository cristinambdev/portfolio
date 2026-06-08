import CascadeWrapper from "../layouts/CascadeWrapper";

export default function AboutText() {
  return (
    <CascadeWrapper>
      <div className="cascade-item w-full max-w-4xl md:max-w-2xl">
        <p className="text-lg text-gray-700 dark:text-zinc-300 leading-relaxed">
          I recently graduated as a Fullstack Developer, but my journey here isn't the typical one.
          Before diving intoweb development, I spent 12 years working as an educator and team leader.
          <br /><br />
          During that time, I discovered that teaching and software engineering actually share the exact same
          core passion of mine: the creative process. Whether I'm designing a curriculum from scratch or architecting
          a smooth user experience, I thrive on taking abstract ideas and building them into tangible solutions that help people.
          <br /><br />
          I recently got to put this into practice during my internship at Gibbs AS. Working directly in a
          live production environment on a <strong className="font-bold text-zinc-900 dark:text-zinc-100">B2B SaaS platform</strong>,
          I shipped real features across the entire stack with <strong className="font-bold text-zinc-900 dark:text-zinc-100">PHP</strong> and <strong className="font-bold text-zinc-900 dark:text-zinc-100">JavaScript</strong>.
          <br /><br />
          For my thesis, I built a complete event management platform from the ground up
          using <strong className="font-bold text-zinc-900 dark:text-zinc-100">C#</strong>, <strong className="font-bold text-zinc-900 dark:text-zinc-100">ASP.NET Core</strong>,
          and <strong className="font-bold text-zinc-900 dark:text-zinc-100">Entity Framework</strong>, using <strong className="font-bold text-zinc-900 dark:text-zinc-100">SQL</strong> for data management and <strong className="font-bold text-zinc-900 dark:text-zinc-100">Azure</strong> for cloud deployment. I love the challenge of writing business-critical code and navigating complex architecture,
          which is also why I am currently diving deep into <strong className="font-bold text-zinc-900 dark:text-zinc-100">TypeScript</strong> to build even more robust and scalable front-end applications.
          <br /><br />

          Because of my background, I bring a unique blend of technical curiosity and a calm, adaptable mindset to development teams.
          I'm a proactive problem-solver, I speak three languages (Spanish, English, and Swedish), and I'm looking for a collaborative team where I can keep growing as
          an engineer while bringing my own unique perspective to the table.
        </p>
      </div>
    </CascadeWrapper>
  );
}
