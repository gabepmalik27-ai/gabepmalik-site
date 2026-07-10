import type { Project } from "../data/projects";
import { projectIcons } from "./icons";

const statusStyles: Record<Project["status"], string> = {
  "in-progress": "border-[#D9985F]/40 text-[#D9985F]",
  live: "border-accent/40 text-accent",
};

const statusLabels: Record<Project["status"], string> = {
  "in-progress": "In progress",
  live: "Live",
};

export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const Icon = projectIcons[project.icon];
  const isLive = project.status === "live";
  const number = String(index + 1).padStart(2, "0");
  const count = String(total).padStart(2, "0");

  const content = (
    <>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted">
          {number} / {count}
        </span>
        <span
          className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center py-6">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-edge bg-accent-muted">
          {isLive && (
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-xl" />
          )}
          <Icon className="h-6 w-6 text-accent" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <h2 className="font-display text-base font-bold text-primary">
          {project.title}
        </h2>
        <p className="text-sm leading-6 text-secondary">
          {project.description}
        </p>
        {project.tags && (
          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const className = `group flex flex-col rounded-2xl border bg-surface p-5 transition-[border-color,background-color] duration-[130ms] ease-out hover:bg-surface-raised ${
    isLive
      ? "border-accent/40 hover:border-accent/60"
      : "border-edge hover:border-accent"
  }`;

  if (!project.href) {
    return <div className={`${className} cursor-default`}>{content}</div>;
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  );
}
