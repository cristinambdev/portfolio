import type { PageHeaderProps } from "../../types";
import CascadeWrapper from "../layouts/CascadeWrapper";

export default function PageHeader({
  title,
  highlight,
  description,
  className = "mb-8 md:mb-12" // Default bottom margin
}: PageHeaderProps) {
  return (
    <CascadeWrapper className={className}>

      <h2 className="cascade-item font-serif text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {title} {highlight && <span className="text-brand-green">{highlight}</span>}
      </h2>

      {description && (
        <p className="cascade-item text-lg text-zinc-500 dark:text-zinc-400 font-sans max-w-md leading-relaxed">
          {description}
        </p>
      )}
    </CascadeWrapper>
  );
}
