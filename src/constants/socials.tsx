import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { SocialLinkItem } from "../types";

export const socialLinks: SocialLinkItem[] = [
  {
    id: "email",
    Icon: MdEmail,
    url: "mailto:mosquera.cristina@gmail.com",
    label: "Email Me",
  },
  {
    id: "linkedin",
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/cristina-m-blanco-dev",
    label: "LinkedIn Profile",
  },
  {
    id: "github",
    Icon: FaGithub,
    url: "https://github.com/cristinambdev",
    label: "GitHub Profile",
  },
];
