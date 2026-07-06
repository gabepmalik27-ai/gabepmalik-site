import { MenuIcon, SearchIcon, SunIcon } from "./icons";

export default function SiteHeader({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  return (
    <header className="relative flex items-center justify-between gap-4 px-6 py-6 sm:px-10">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 font-mono text-xs font-semibold text-emerald-400">
          GM
        </div>
        <span className="text-lg font-bold text-zinc-50">
          G. Malik Projects
        </span>
      </div>

      <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/40">
            <span className="font-mono text-xs font-semibold text-emerald-400">
              M
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <SunIcon className="hidden h-5 w-5 text-zinc-500 sm:block" />
        <label className="relative">
          <span className="sr-only">Search projects</span>
          <input
            type="text"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search projects"
            className="w-36 rounded-full border border-white/10 bg-white/[.03] py-2 pr-9 pl-4 text-sm text-zinc-200 placeholder:text-zinc-500 focus:border-emerald-400/40 focus:outline-none sm:w-56"
          />
          <SearchIcon className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        </label>
        <button
          type="button"
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-200"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
