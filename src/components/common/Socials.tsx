import { CiMail } from "react-icons/ci";
import { SlSocialLinkedin, SlSocialGithub  } from "react-icons/sl";

const Socials = () => {
  return (
     <div className="flex gap-4 mt-8">
        {[
          {
            Icon: CiMail,
            url: "mailto:mosquera.cristina@gmail.com",
            label: "Email Me"
          },
          {
            Icon: SlSocialLinkedin,
            url: "https://www.linkedin.com/in/cristina-m-blanco-dev",
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
  )
}

export default Socials
