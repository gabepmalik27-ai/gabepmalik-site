export type ProjectStatus = "in-progress" | "live";
export type ProjectIcon = "chart" | "chevrons" | "terminal" | "grid";
export type ProjectCategory = "Web Apps" | "Games" | "Learning" | "Experiments";

export interface Project {
  slug: string;
  title: string;
  description: string;
  href: string | null;
  status: ProjectStatus;
  icon: ProjectIcon;
  category: ProjectCategory;
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
    category: "Learning",
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
    category: "Games",
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
    category: "Web Apps",
    tags: ["Next.js", "Prisma"],
  },
  {
    slug: "valuation-tracker",
    title: "Valuation Tracker",
    description:
      "A dashboard for tracking company valuations, price targets, and implied returns over time.",
    href: "https://valuation-tracker-indol.vercel.app",
    status: "live",
    icon: "chart",
    category: "Web Apps",
    tags: ["Next.js", "Recharts", "Vercel Blob"],
  },
];
