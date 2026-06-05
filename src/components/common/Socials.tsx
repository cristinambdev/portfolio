import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  return (
     <div className="flex gap-4 mt-8">
        {[
          {
            Icon: MdEmail ,
            url: "mailto:mosquera.cristina@gmail.com",
            label: "Email Me"
          },
          {
            Icon: FaLinkedin,
            url: "https://www.linkedin.com/in/cristina-m-blanco-dev",
            label: "LinkedIn Profile"
          },
          {
            Icon: FaGithub,
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
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-500 hover:text-brand-orange hover:border-brand-orange/50 hover:bg-orange-50 transition-all"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
  )
}

export default Socials
