"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { SearchIcon } from "./icons";

function PersonalMark() {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-accent">
      <span className="font-mono text-[10px] font-semibold text-accent">
        GM
      </span>
    </div>
  );
}

function FamilyMark() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="shrink-0 text-accent"
    >
      <circle
        cx="18"
        cy="18"
        r="16"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.35"
      />
      <circle
        cx="18"
        cy="18"
        r="11"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.6"
      />
      <circle
        cx="18"
        cy="18"
        r="6.5"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.85"
      />
      <path
        d="M12 24V13l6 7 6-7v11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const menuItems = ["About", "Resume", "Contact", "GitHub"];

export default function SiteHeader({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-14 border-b border-edge bg-surface">
      <div className="mx-auto grid h-full max-w-6xl grid-cols-3 items-center gap-4 px-6">
        <div className="flex items-center gap-2.5">
          <PersonalMark />
          <span className="font-display text-sm font-semibold whitespace-nowrap text-primary">
            G. Malik Projects
          </span>
        </div>

        <div className="flex justify-center">
          <FamilyMark />
        </div>

        <div className="flex items-center justify-end gap-3">
          <ThemeToggle />

          <div className="relative">
            <input
              type="text"
              placeholder="Search projects"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              className="h-8 w-44 rounded-[6px] border border-edge bg-base px-3 pr-7 text-xs text-primary transition-colors duration-[130ms] placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <SearchIcon className="pointer-events-none absolute top-1/2 right-2.5 h-3 w-3 -translate-y-1/2 text-muted" />
          </div>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Open menu"
              className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-[5px] text-muted transition-colors duration-[130ms] hover:text-primary"
            >
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </button>

            {menuOpen && (
              <div className="absolute top-[calc(100%+6px)] right-0 w-44 overflow-hidden rounded-[9px] border border-edge bg-surface py-1">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    className="w-full cursor-pointer px-4 py-2 text-left text-sm text-secondary transition-colors duration-[130ms] hover:bg-surface-raised hover:text-primary"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
