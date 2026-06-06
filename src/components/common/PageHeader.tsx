import type { PageHeaderProps } from "../../types";

export default function PageHeader({
  title,
  highlight,
  description,
  className = "mb-8 md:mb-12" // Default bottom margin
}: PageHeaderProps) {
  return (
    <div className={className}>
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {title} {highlight && <span className="text-brand-green">{highlight}</span>}
      </h2>

      {/* Only render the paragraph if a description was actually provided */}
      {description && (
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
