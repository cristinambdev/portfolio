export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C#", "PHP", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    category: "Frameworks & Libraries",
    skills: [".NET", "ASP.NET Core", "Entity Framework", "React", "Tailwind CSS",]
  },
  {
    category: "Cloud, Databases & Tools",
    skills: ["Azure", "MySQL", "Git", "GitHub", "Figma", "Visual Studio", "VS Code"]
  }
];
