import type { Project } from "../data/projects";
import { projectIcons } from "./icons";

function DotGrid() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-30 text-muted"
      style={{
        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
        backgroundSize: "14px 14px",
      }}
    />
  );
}

function SparklineVisual() {
  return (
    <svg viewBox="0 0 200 80" className="absolute inset-0 h-full w-full" aria-hidden>
      <polyline
        points="10,55 35,42 60,50 85,25 110,34 135,14 160,22 190,10"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="190" cy="10" r="3" fill="var(--accent)" />
      <circle cx="190" cy="10" r="7" fill="var(--accent)" opacity="0.3" />
    </svg>
  );
}

function MazeVisual() {
  const path = "M14,64 h20 v-16 h20 v-16 h20 v16 h20 v16 h20 v-32 h30";
  return (
    <svg viewBox="0 0 200 80" className="absolute inset-0 h-full w-full" aria-hidden>
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 14 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={8 + col * 14}
            cy={8 + row * 13}
            r="1"
            fill="var(--border)"
          />
        )),
      )}
      <path
        d={path}
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="164" cy="16" r="3.5" fill="var(--accent)" />
    </svg>
  );
}

function CircuitVisual() {
  return (
    <svg viewBox="0 0 200 80" className="absolute inset-0 h-full w-full" aria-hidden>
      <path
        d="M10,20 h40 v20 h30 M50,40 v20 h40 M120,20 h30 v40 h30"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      <circle cx="10" cy="20" r="3" fill="var(--accent)" />
      <circle cx="80" cy="40" r="3" fill="var(--accent)" opacity="0.7" />
      <circle cx="90" cy="60" r="3" fill="var(--accent)" opacity="0.7" />
      <circle cx="180" cy="60" r="3.5" fill="var(--accent)" />
      <text
        x="120"
        y="16"
        fontSize="11"
        className="font-mono"
        fill="var(--accent)"
        opacity="0.6"
      >
        0 1
      </text>
    </svg>
  );
}

function BarHistogramVisual() {
  const heights = [18, 30, 22, 42, 34, 50, 40, 60];
  return (
    <svg viewBox="0 0 200 80" className="absolute inset-0 h-full w-full" aria-hidden>
      {heights.map((h, i) => (
        <rect
          key={i}
          x={10 + i * 23}
          y={68 - h}
          width="12"
          height={h}
          rx="2"
          fill="var(--accent)"
          opacity={0.35 + (i / heights.length) * 0.5}
        />
      ))}
    </svg>
  );
}

const visualsBySlug: Record<string, React.ComponentType> = {
  "finance-learning": SparklineVisual,
  snake: MazeVisual,
  "job-application-tracker": CircuitVisual,
  "valuation-tracker": BarHistogramVisual,
};

export default function ProjectThumbnail({ project }: { project: Project }) {
  const Visual = visualsBySlug[project.slug] ?? SparklineVisual;
  const Icon = projectIcons[project.icon];

  return (
    <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl border border-edge bg-surface sm:w-56">
      <DotGrid />
      <Visual />
      <div className="absolute right-2 bottom-2 flex h-7 w-7 items-center justify-center rounded-md border border-edge bg-base">
        <Icon className="h-3.5 w-3.5 text-accent" />
      </div>
    </div>
  );
}
