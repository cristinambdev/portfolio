import type { ProjectCardProps, ProjectLink } from "../../types";

export default function ProjectCard({
  title,
  description,
  techStacks,
  links,
}: ProjectCardProps) {

  // Tech Badges
  const techStacksEntry = techStacks.map((techStack: string, index:number) => (
    <span
      key={index}
      className="mr-2 mb-2 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-widest rounded-sm border border-brand-green/30 bg-brand-green/5 text-brand-green"
    >
      {techStack}
    </span>
  ));

  // Social/Repo Links
  const linksEntry = links.map((link: ProjectLink, index: number) => (
    <li key={index} className="z-10">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-brand-orange hover:border-brand-orange/50 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-all"
      >
        {link.icon}
      </a>
    </li>
  ));

  // Determine the main click target for the Title
  const mainUrl = links.find(({ label }) => label === 'Source code')?.url ??
                  links.find(({ label }) => label === 'Live')?.url ??
                  '#';

  return (
    <div className="group flex flex-col min-h-[420px] justify-between p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all h-full">

      <header>
        <h3 className="font-serif text-2xl font-bold mb-3">
          {/* Main Title Link */}
          <a
            href={mainUrl}
            className="text-zinc-900 dark:text-zinc-100 group-hover:text-brand-green transition-colors focus:outline-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}

            {/* Invisible overlay so clicking anywhere on the top of the card opens the link */}
            <span className="absolute inset-0 z-0 hidden sm:block" aria-hidden="true"></span>
          </a>
        </h3>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-8 relative z-10 line-clamp-8">
          {description}
        </p>
      </header>

        {/* Footer*/}
      <footer className="relative z-10">
        <div className="mb-6 flex flex-wrap">{techStacksEntry}</div>
        <ul className="flex space-x-3">{linksEntry}</ul>
      </footer>

    </div>
  );
}
