import type { Project } from "../data/projects";
import { ArrowRightIcon } from "./icons";
import ProjectThumbnail from "./ProjectThumbnail";

const statusStyles: Record<Project["status"], string> = {
  "in-progress": "border-[#D9985F]/40 text-[#D9985F]",
  live: "border-accent/40 text-accent",
};

const statusDotStyles: Record<Project["status"], string> = {
  "in-progress": "bg-[#D9985F]",
  live: "bg-accent",
};

const statusLabels: Record<Project["status"], string> = {
  "in-progress": "In progress",
  live: "Live",
};

export default function ProjectRow({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const number = String(index + 1).padStart(2, "0");
  const count = String(total).padStart(2, "0");

  const content = (
    <>
      <ProjectThumbnail project={project} />

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="font-mono text-xs text-muted">
          {number} / {count}
        </span>
        <h2 className="font-display text-base font-bold text-primary">
          {project.title}
        </h2>
        <p className="text-sm leading-6 text-secondary">
          {project.description}
        </p>
        {project.tags && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-edge px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-4 self-start sm:self-center">
        <span
          className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[project.status]}`} />
          {statusLabels[project.status]}
        </span>
        <ArrowRightIcon className="hidden h-4 w-4 text-muted transition-[transform,color] duration-[130ms] ease-out group-hover:translate-x-0.5 group-hover:text-accent sm:block" />
      </div>
    </>
  );

  const className =
    "group flex flex-col gap-4 rounded-2xl border border-edge bg-surface p-4 transition-[border-color,background-color] duration-[130ms] ease-out hover:border-accent/40 hover:bg-surface-raised sm:flex-row sm:items-center";

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
