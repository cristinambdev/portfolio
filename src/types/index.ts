import type { ReactNode } from "react";

export interface LinkProps {
  label: string;
  url: string;
  icon: ReactNode;
}

export interface ProjectProps {
  title: string;
  description: string;
  techStacks: string[];
  links: LinkProps[];
}

export interface PageHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}
