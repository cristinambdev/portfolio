import type { ReactNode } from "react";
import type { IconType } from "react-icons";


export interface ProjectLink {
  label: string;
  url: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  techStacks: string[];
  links: ProjectLink[];
}

export type ProjectCardProps = Project;

export interface PageHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SocialLink {
  Icon: IconType;
  url: string;
  label: string;
}
export interface ProjectFilterProps {
  allTechStacks: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export interface FeaturedProjectsProps {
  projects: Project[];
  emptyMessage?: string;
}

export type NavLinkClassName = (state: { isActive: boolean }) => string;
