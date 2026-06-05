import Socials from "./common/Socials";

export default function Hero() {
  return (
    <section className="flex flex-col items-start gap-6 pt-10">

      {/* Badge */}
      <div className="border border-brand-green/30 bg-brand-green/5 text-brand-green px-3 py-1 rounded-sm text-[10px] font-mono tracking-widest uppercase font-semibold">
        Available for work
      </div>

      {/* Greeting */}
      <div className="font-mono text-zinc-600 text-sm md:text-base flex items-center gap-2 mt-2">
        Hi, I'm Cristina Mosquera
      </div>
    {/* Main Headline */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[4.5rem] leading-[1.1] text-zinc-900 tracking-tight font-medium mt-4">
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
        <span className="italic text-brand-orange whitespace-nowrap">backend systems.</span>

      </h1>

    {/* Social Buttons */}
      <Socials />

      {/* Scroll Indicator */}
      <div className="w-full flex flex-col items-center gap-4 mt-32 opacity-50">
        <div className="w-px h-8 bg-linear-to-b from-zinc-600 to-transparent"></div>
        <span className="text-[14px] font-mono tracking-[0.2em] uppercase text-zinc-600">Featured Projects</span>
      </div>

    </section>
  );
}
