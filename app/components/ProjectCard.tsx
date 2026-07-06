import type { Project } from "../data/projects";
import { projectIcons } from "./icons";

const statusStyles: Record<Project["status"], string> = {
  "in-progress": "border-amber-400/40 text-amber-400",
  live: "border-emerald-400/40 text-emerald-400",
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
        <span className="font-mono text-xs text-zinc-500">
          {number} / {count}
        </span>
        <span
          className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center py-10">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/15">
          {isLive && (
            <div className="absolute inset-0 -z-10 rounded-full bg-emerald-400/10 blur-xl" />
          )}
          <Icon className="h-9 w-9 text-zinc-300" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <h2 className="text-lg font-bold text-zinc-50">{project.title}</h2>
        <p className="text-sm leading-6 text-zinc-400">
          {project.description}
        </p>
        {project.tags && (
          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-zinc-500">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const className = `group flex flex-col rounded-2xl border bg-zinc-950/60 p-6 transition-colors ${
    isLive
      ? "border-emerald-400/40 hover:border-emerald-400/60"
      : "border-white/10 hover:border-white/20"
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
