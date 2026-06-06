import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "../types";

export const projectsData: Project[] = [
{
    title: "crismbdev",
    description: "A highly optimized, responsive personal developer portfolio. Built with a strict TypeScript architecture, custom Tailwind CSS animations, and reusable component patterns.",
    techStacks: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    links: [
      {
        label: "Source code",
        url: "https://github.com/cristinambdev/portfolio.git",
        icon: <FaGithub size={20} />
      },
      {
        label: "Live",
        url: "#",
        icon: <FaExternalLinkAlt size={18} />
      },
    ],
  },
    {
        title: "Rodda",
        description: "A full-stack event platform designed to simplify group coordination. Built from the ground up with a focus on a hybrid architecture and secure, role-based access control.",
        techStacks: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "Azure", "JavaScript(ES6)", "CSS3", "HTML5"],
        links: [
        { label: "Source code", url: "https://github.com/cristinambdev/rodda.git", icon: <FaGithub size={20} /> },
        { label: "Live", url: "https://roddamvp.netlify.app", icon: <FaExternalLinkAlt size={18} /> },
        ],
    }
  // 3rd and 4th projects here!
];

export const allTechStacks = Array.from(
  new Set(projectsData.flatMap((project) => project.techStacks))
);
