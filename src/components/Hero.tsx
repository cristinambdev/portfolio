import { CiMail } from "react-icons/ci";
import { SlSocialLinkedin, SlSocialGithub  } from "react-icons/sl";

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
      <h1 className="font-serif text-5xl md:text-7xl lg:text-[4.5rem] leading-[1.1] text-zinc-900 max-w-xxl tracking-tight font-medium mt-4">
        <span>Fullstack developer</span> <br />
        <span>building intuitive</span><span className="italic text-brand-green"> web interfaces</span> <br />
        and robust <span className="italic text-brand-orange"> backend systems.</span>
      </h1>

    {/* Social Buttons */}
      <div className="flex gap-4 mt-8">
        {[
          {
            Icon: CiMail,
            url: "mailto:mosquera.cristina@gmail.com",
            label: "Email Me"
          },
          {
            Icon: SlSocialLinkedin,
            url: "www.linkedin.com/in/cristina-m-blanco-dev",
            label: "LinkedIn Profile"
          },
          {
            Icon: SlSocialGithub,
            url: "https://github.com/cristinambdev",
            label: "GitHub Profile"
          }
        ].map(({ Icon, url, label }, index) => (
          <a
            key={index}
            href={url}
            // If it's an email link we don't need a new tab, otherwise open safely in a new tab
            target={url.startsWith('mailto') ? "_self" : "_blank"}
            rel={url.startsWith('mailto') ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="w-full flex flex-col items-center gap-4 mt-32 opacity-50">
        <div className="w-px h-8 bg-linear-to-b from-zinc-600 to-transparent"></div>
        <span className="text-[14px] font-mono tracking-[0.2em] uppercase text-zinc-600">Featured Projects</span>
      </div>

    </section>
  );
}
