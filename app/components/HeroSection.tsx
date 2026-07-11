import { CodeBracketsIcon, CubeStackIcon, InfinityIcon, ZapIcon } from "./icons";

const rayAngles = Array.from({ length: 16 }, (_, i) => i * (360 / 16));

function GlowBurst() {
  return (
    <div className="relative hidden h-40 w-40 shrink-0 items-center justify-center md:flex">
      <div className="absolute h-full w-full rounded-full bg-accent/15 blur-3xl" />
      <svg
        viewBox="0 0 200 200"
        className="absolute h-full w-full text-accent/25"
        aria-hidden
      >
        {rayAngles.map((angle) => (
          <line
            key={angle}
            x1="100"
            y1="100"
            x2="100"
            y2="6"
            stroke="currentColor"
            strokeWidth="1"
            transform={`rotate(${angle} 100 100)`}
          />
        ))}
      </svg>
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-surface">
        <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-xl" />
        <CubeStackIcon className="h-7 w-7 text-accent" />
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="flex w-28 flex-col items-center justify-center gap-1.5 rounded-xl border border-edge bg-surface px-3 py-4 text-center">
      <Icon className="h-4 w-4 text-accent" />
      <span className="font-display text-lg font-bold text-primary">
        {value}
      </span>
      <span className="text-[11px] text-muted">{label}</span>
    </div>
  );
}

export default function HeroSection({
  projectCount,
  liveCount,
}: {
  projectCount: number;
  liveCount: number;
}) {
  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-md">
        <p className="font-mono text-xs tracking-[0.3em] text-muted">
          SELECTED WORK
        </p>
        <h1 className="mt-3 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
          <span className="text-primary">Pro</span>
          <span className="text-accent">jects</span>
        </h1>
        <p className="mt-3 text-sm text-secondary">Ideas turn into impact.</p>
      </div>

      <GlowBurst />

      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={CubeStackIcon} value={String(projectCount)} label="Projects" />
        <StatCard icon={ZapIcon} value={String(liveCount)} label="Live" />
        <StatCard icon={CodeBracketsIcon} value="10K+" label="Lines of Code" />
        <StatCard icon={InfinityIcon} value="∞" label="Ideas" />
      </div>
    </section>
  );
}
