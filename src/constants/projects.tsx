import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    title: "crismbdev",
    description:
      "A personal developer portfolio. Built with a strict TypeScript architecture, custom Tailwind CSS animations, and reusable component patterns.",
    techStacks: ["React", "TypeScript", "Tailwind CSS"],
    isFeatured: true,
    links: [
      {
        label: "Source code",
        url: "https://github.com/cristinambdev/portfolio.git",
        icon: <FaGithub size={20} />,
      },
      {
        label: "Live",
        url: "https://crismbdev.netlify.app/",
        icon: <FaExternalLinkAlt size={18} />,
      },
    ],
  },
  {
    title: "Rodda",
    description:
      "A full-stack event platform designed to simplify group coordination. Built from the ground up with a focus on a hybrid architecture and secure, role-based access control. Prototype available at external link icon",
    techStacks: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "Azure",
      "JavaScript",
      "CSS",
      "HTML",
    ],
    isFeatured: true,
    links: [
      {
        label: "Source code",
        url: "https://github.com/cristinambdev/rodda.git",
        icon: <FaGithub size={20} />,
      },
      {
        label: "Live",
        url: "https://roddamvp.netlify.app",
        icon: <FaExternalLinkAlt size={18} />,
      },
    ],
  },
  {
    title: "Silicon App",
    description:
      "A React-based web application built with Vite. Component-driven architecture, modern JavaScript patterns, and fast development workflows.",
    techStacks: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    isFeatured: false,
    links: [
      {
        label: "Source code",
        url: "https://github.com/cristinambdev/siliconapp-react.git",
        icon: <FaGithub size={20} />,
      },
    ],
  },
  {
    title: "C# Project",
    description:
      "A structured C# application built with a layered architecture including Business, Domain, and WPF Presentation layers. Includes a dedicated test project demonstrating unit testing practices.",
    techStacks: ["C#", ".NET", "WPF"],
    isFeatured: false,
    links: [
      {
        label: "Source code",
        url: "https://github.com/cristinambdev/CSharp_Assignment.git",
        icon: <FaGithub size={20} />,
      },
    ],
  },
  {
    title: "Data Storage Project",
    description:
      "A C# application demonstrating data persistence patterns with a clean separation between Data, Infrastructure, and Presentation layers using Entity Framework Core.",
    techStacks: ["C#", ".NET", "Entity Framework Core"],
    isFeatured: false,
    links: [
      {
        label: "Source code",
        url: "https://github.com/cristinambdev/DataStorage_Assignment.git",
        icon: <FaGithub size={20} />,
      },
    ],
  },
  {
    title: "Alpha Project",
    description:
      "A full-stack web application structured with a layered architecture spanning Business, Data, Domain, and Presentation layers. Built with C# and ASP.NET.",
    techStacks: ["C#", "ASP.NET Core", "JavaScript", "CSS", "HTML"],
    isFeatured: true,
    links: [
      {
        label: "Source code",
        url: "https://github.com/cristinambdev/Alpha_Project.git",
        icon: <FaGithub size={20} />,
      },
    ],
  },
  {
    title: "Onatrix CMS",
    description:
      "A content management system built on Umbraco and ASP.NET Core. Features custom controllers, services, view models, a rich text editor plugin, and a CI/CD pipeline via GitHub Actions.",
    techStacks: ["C#", "ASP.NET Core", "Umbraco", "CSS", "HTML", "JavaScript"],
    isFeatured: false,
    links: [
      {
        label: "Source code",
        url: "https://github.com/cristinambdev/onatrix-cms.git",
        icon: <FaGithub size={20} />,
      },
    ],
  },
  {
    title: "Ventixe System",
    description:
      "A microservices-based event platform built collaboratively, with separate services for accounts, profiles, bookings, and events. Demonstrates distributed system design with a JavaScript frontend.",
    techStacks: ["C#", "ASP.NET Core", "Microservices", "JavaScript", "Azure", "CSS", "HTML"],
    isFeatured: true,
    links: [
      {
        label: "Source code",
        url: "https://github.com/orgs/win24-ventixe-system/repositories",
        icon: <FaGithub size={20} />,
      },
    ],
  },
  {
    title: "Basketball Scoreboard",
    description:
      "An interactive game score tracker built with vanilla JavaScript. Focuses on clean DOM manipulation, event handling, and responsive UI without any frameworks.",
    techStacks: ["JavaScript", "CSS", "HTML"],
    isFeatured: false,
    links: [
      {
        label: "Source code",
        url: "https://github.com/cristinambdev/basketball-scoreboard.git",
        icon: <FaGithub size={20} />,
      },
    ],
  },
];

export const featuredProjects = projectsData.filter((project) => project.isFeatured);

export const allTechStacks = Array.from(
  new Set(projectsData.flatMap((project) => project.techStacks))
);
