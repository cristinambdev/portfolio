/**
 * Shared TypeScript contracts for portfolio data and component props.
 */
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

// ─── Projects ───────────────────────────────────────────────────────────────

/** One external link on a project card (e.g. live demo, GitHub). */
export interface ProjectLink {
  label: string;
  url: string;
  icon: ReactNode;
}

/** Full project data: content, tech tags, links, and featured-home flag. */
export interface Project {
  title: string;
  description: string;
  techStacks: string[];
  links: ProjectLink[];
  isFeatured: boolean;
}

/** Props for ProjectCard — same as Project without the featured flag. */
export type ProjectCardProps = Omit<Project, "isFeatured">;

/** Props for the Projects list: project array and optional empty-state message. */
export interface ProjectsProps {
  projects: Project[];
  emptyMessage?: string;
  cascadeItems?: boolean;
}

/** Props for the home page featured section (projects come from constants). */
export interface FeaturedProjectsProps {
  emptyMessage?: string;
}

/** Props for the tech-stack filter: available stacks, active filter, and change handler. */
export interface ProjectFilterProps {
  allTechStacks: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

// ─── Layout & navigation ────────────────────────────────────────────────────

/** Props for section/page titles: title, optional highlight, description, and classes. */
export interface PageHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

/** Props for the mobile nav drawer: open state and toggle setter. */
export interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

/** React Router NavLink className fn — receives isActive and returns a CSS class string. */
export type NavLinkClassName = (state: { isActive: boolean }) => string;

// ─── About / skills ───────────────────────────────────────────────────────────

/** One skills category (e.g. "Frontend") and its list of skill names. */
export interface SkillGroup {
  category: string;
  skills: string[];
}

// ─── Social links ─────────────────────────────────────────────────────────────

/** Base shape for a social icon link: icon component, URL, and accessible label. */
export interface SocialLink {
  Icon: IconType;
  url: string;
  label: string;
}

/** Allowed platform IDs used to filter which icons Socials renders. */
export type SocialPlatform = "email" | "linkedin" | "github";

/** SocialLink with a platform id for filtering in the Socials component. */
export interface SocialLinkItem extends SocialLink {
  id: SocialPlatform;
}

/** Props for Socials: optional platform filter and wrapper className. */
export interface SocialsProps {
  platforms?: SocialPlatform[];
  className?: string;
}
