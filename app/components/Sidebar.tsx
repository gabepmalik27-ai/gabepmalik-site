"use client";

import {
  BarChartIcon,
  BookIcon,
  ChevronRightIcon,
  CodeBracketsIcon,
  FlaskIcon,
  GamepadIcon,
  GearIcon,
  GlobeIcon,
  HouseIcon,
  LightbulbIcon,
} from "./icons";

const navItems = [
  { label: "Overview", icon: HouseIcon, category: "All Projects" as const },
  { label: "Projects", icon: CodeBracketsIcon, category: "All Projects" as const },
  { label: "Web Apps", icon: GlobeIcon, category: "Web Apps" as const },
  { label: "Games", icon: GamepadIcon, category: "Games" as const },
  { label: "Learning", icon: BookIcon, category: "Learning" as const },
  { label: "Experiments", icon: FlaskIcon, category: "Experiments" as const },
  { label: "Analytics", icon: BarChartIcon, category: null },
  { label: "Ideas", icon: LightbulbIcon, category: null },
  { label: "Settings", icon: GearIcon, category: null },
];

export default function Sidebar({
  activeLabel,
  onSelect,
}: {
  activeLabel: string;
  onSelect: (label: string, category: string | null) => void;
}) {
  return (
    <aside className="fixed top-16 left-0 z-40 hidden h-[calc(100vh-4rem)] w-60 flex-col justify-between border-r border-edge bg-base px-3 py-6 lg:flex">
      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, icon: Icon, category }) => {
          const isActive = label === activeLabel;
          return (
            <button
              key={label}
              onClick={() => onSelect(label, category)}
              className={`flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors duration-[130ms] ease-out ${
                isActive
                  ? "bg-accent-muted text-accent"
                  : "text-secondary hover:bg-surface hover:text-primary"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <button className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg border border-edge bg-surface px-3 py-2.5 text-left transition-colors duration-[130ms] ease-out hover:bg-surface-raised">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent">
          <span className="font-mono text-[10px] font-semibold text-accent">
            GM
          </span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium text-primary">
            G. Malik
          </span>
          <span className="truncate text-xs text-muted">
            Full Stack Developer
          </span>
        </div>
        <ChevronRightIcon className="h-4 w-4 shrink-0 text-muted" />
      </button>
    </aside>
  );
}
