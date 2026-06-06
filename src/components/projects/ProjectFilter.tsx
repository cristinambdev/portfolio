import type { ProjectFilterProps } from "../../types";

export default function ProjectFilter({
  allTechStacks,
  activeFilter,
  onFilterChange,
}: ProjectFilterProps) {
  const filterButtonClasses = (filter: string) =>
    `cursor-pointer px-4 py-2 text-xs md:text-sm font-mono font-semibold uppercase tracking-widest rounded-full border transition-all ${
      activeFilter === filter
        ? "bg-brand-green text-white border-brand-green shadow-md"
        : "bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-brand-green/50 hover:text-brand-green"
    }`;

  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {/* The "All" Button */}
      <button
        onClick={() => onFilterChange("All")}
        className={filterButtonClasses("All")}
      >
        All
      </button>

      {/* The Dynamic Tech Stack Buttons */}
      {allTechStacks.map((tech, index) => (
        <button
          key={index}
          onClick={() => onFilterChange(tech)}
          className={filterButtonClasses(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}
