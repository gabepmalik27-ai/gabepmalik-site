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
    href: "https://finance-learning-website.vercel.app",
    status: "live",
    icon: "chart",
    tags: ["Next.js", "TypeScript", "Finance"],
  },
  {
    slug: "snake",
    title: "Snake",
    description:
      "Classic grid-based Snake with a fixed-tick game loop, buffered input, and mobile swipe controls.",
    href: "https://snake-game-gmalikprojects.vercel.app",
    status: "live",
    icon: "grid",
    tags: ["React", "Vite", "Tailwind", "Canvas"],
  },
  {
    slug: "job-application-tracker",
    title: "Job Application Tracker",
    description:
      "Tracks job applications and contacts, with login and a scheduled demo-data reset.",
    href: "https://job-application-tracker-seven-ecru.vercel.app",
    status: "live",
    icon: "terminal",
    tags: ["Next.js", "Prisma"],
  },
  {
    slug: "project-three",
    title: "Project three",
    description: "A placeholder for the third app. Direct, no fluff.",
    href: null,
    status: "in-progress",
    icon: "chevrons",
  },
  {
    slug: "valuation-tracker",
    title: "Valuation Tracker",
    description:
      "A dashboard for tracking company valuations, price targets, and implied returns over time.",
    href: "https://valuation-tracker-indol.vercel.app",
    status: "live",
    icon: "chart",
    tags: ["Next.js", "Recharts", "Vercel Blob"],
  },
];
