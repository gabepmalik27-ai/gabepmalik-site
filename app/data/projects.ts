export type ProjectStatus = "in-progress" | "live";
export type ProjectIcon = "chart" | "chevrons" | "terminal" | "grid";

export interface Project {
  slug: string;
  title: string;
  description: string;
  href: string | null;
  status: ProjectStatus;
  icon: ProjectIcon;
  tags?: string[];
}

export const projects: Project[] = [
  {
    slug: "finance-learning",
    title: "Finance Learning",
    description:
      "An interactive app for building financial literacy through hands-on lessons.",
    href: "http://localhost:3000",
    status: "live",
    icon: "chart",
  },
  {
    slug: "snake",
    title: "Snake",
    description:
      "Classic grid-based Snake with a fixed-tick game loop, buffered input, and mobile swipe controls.",
    href: "http://localhost:3001",
    status: "live",
    icon: "grid",
    tags: ["React", "Vite", "Tailwind", "Canvas"],
  },
  {
    slug: "project-two",
    title: "Project two",
    description:
      "A placeholder for the second app. What problem it solves, not how it works internally.",
    href: null,
    status: "in-progress",
    icon: "chevrons",
  },
  {
    slug: "project-three",
    title: "Project three",
    description: "A placeholder for the third app. Direct, no fluff.",
    href: null,
    status: "in-progress",
    icon: "terminal",
  },
];
