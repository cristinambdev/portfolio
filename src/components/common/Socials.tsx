import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { SocialLink } from "../../types";

const socialLinks: SocialLink[] = [
  {
    Icon: MdEmail,
    url: "mailto:mosquera.cristina@gmail.com",
    label: "Email Me",
  },
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/cristina-m-blanco-dev",
    label: "LinkedIn Profile",
  },
  {
    Icon: FaGithub,
    url: "https://github.com/cristinambdev",
    label: "GitHub Profile",
  },
];

export default function Socials() {
  return (
    <div className="flex gap-4 mt-8">
      {socialLinks.map(({ Icon, url, label }, index) => (
        <a
          key={index}
          href={url}
          target={url.startsWith("mailto") ? "_self" : "_blank"}
          rel={url.startsWith("mailto") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-brand-orange hover:border-brand-orange/50 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-all"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
