import type { Project } from "../models/Project";

export interface ProjectCardProps {
  project: Project;

  index: number;              // Used to alternate left/right layout on the screen
  isReversed?: boolean;       // Used to flip the image side
  onHover?: () => void;       // Used to trigger an animation
}
