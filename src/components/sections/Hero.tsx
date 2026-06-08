import Socials from "../common/Socials";
import CascadeWrapper from "../layouts/CascadeWrapper";

export default function Hero() {
  return (
    <CascadeWrapper>
      <section className="flex flex-col items-start gap-6 pt-10 min-h-[calc(100vh-6rem)]">

      {/* Badge */}
      <div className="animate-hero [animation-delay:100ms] border border-brand-green/30 bg-brand-green/5 text-brand-green px-3 py-1 rounded-sm text-[12px] font-mono tracking-widest uppercase font-semibold">
        Available for work
      </div>

      {/* Greeting */}
      <div className="animate-hero [animation-delay:200ms] font-mono text-zinc-600 dark:text-zinc-400 text-sm md:text-base flex items-center gap-2 mt-2">
        Hi, I'm Cristina Mosquera
      </div>
    {/* Main Headline */}
      <h1 className="animate-hero [animation-delay:300ms] font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[4.5rem] leading-[1.1] text-zinc-900 dark:text-zinc-100 tracking-tight font-medium mt-4">
        {/* Line 1: Always its own line */}
        <span>Fullstack developer</span>
        <br />

        {/* Line 2 (Desktop) / Lines 2 & 3 (Mobile) */}
        <span>building intuitive </span>
        <br className="md:hidden" />
        <span className="italic text-brand-green whitespace-nowrap">web interfaces</span>
        <br />

        {/* Line 3 (Desktop) / Lines 4 & 5 (Mobile) */}
        <span>and robust </span>
        <br className="md:hidden" />
        <span className="italic text-brand-brick-red whitespace-nowrap">backend systems.</span>

      </h1>

    {/* Social Buttons */}
      <Socials  className="animate-hero [animation-delay:400ms] flex gap-3" />

      {/* Scroll Indicator */}
      <a
        href="#featured-projects"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById("featured-projects");
          if (!target) return;

          const headerOffset = 96;
          const top =
            target.getBoundingClientRect().top + window.scrollY - headerOffset;

          window.scrollTo({ top, behavior: "smooth" });
        }}
        className="animate-hero [animation-delay:600ms] mt-auto mb-16 w-full flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer focus:outline-none"
        aria-label="Scroll to Featured Projects"
      >
        {/* The Animated Arrow */}
        <svg
          className="w-5 h-12 text-zinc-600 dark:text-zinc-400 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* This path draws a long vertical line with a downward arrowhead at the bottom */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>

        <span className="text-[14px] font-mono tracking-[0.2em] uppercase text-zinc-600 dark:text-zinc-400 animate-bounce">
          Featured Projects
        </span>
      </a>

      </section>
    </CascadeWrapper>
  );
}
