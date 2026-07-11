"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "./icons";

const tabs = ["All Projects", "Web Apps", "Games", "Learning", "Experiments"];
const sortOptions = ["Latest", "Title A–Z"] as const;

export default function FilterTabs({
  activeCategory,
  onSelectCategory,
  sort,
  onSortChange,
}: {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  sort: (typeof sortOptions)[number];
  onSortChange: (sort: (typeof sortOptions)[number]) => void;
}) {
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    }
    if (sortOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sortOpen]);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {tabs.map((tab) => {
          const isActive = tab === activeCategory;
          return (
            <button
              key={tab}
              onClick={() => onSelectCategory(tab)}
              className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-[130ms] ease-out ${
                isActive
                  ? "bg-accent text-base"
                  : "text-secondary hover:bg-surface hover:text-primary"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="relative" ref={sortRef}>
        <button
          onClick={() => setSortOpen((o) => !o)}
          className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-edge bg-surface px-3 py-1.5 text-xs text-secondary transition-colors duration-[130ms] ease-out hover:text-primary"
        >
          {sort}
          <ChevronDownIcon className="h-3.5 w-3.5" />
        </button>

        {sortOpen && (
          <div className="absolute top-[calc(100%+6px)] right-0 z-10 w-36 overflow-hidden rounded-[9px] border border-edge bg-surface py-1">
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onSortChange(option);
                  setSortOpen(false);
                }}
                className="w-full cursor-pointer px-3.5 py-2 text-left text-xs text-secondary transition-colors duration-[130ms] hover:bg-surface-raised hover:text-primary"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
