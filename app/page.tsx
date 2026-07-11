"use client";

import { useMemo, useState } from "react";
import BackgroundDecor from "./components/BackgroundDecor";
import SiteHeader from "./components/SiteHeader";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import FilterTabs from "./components/FilterTabs";
import ProjectRow from "./components/ProjectRow";
import { projects } from "./data/projects";

const categoryToNavLabel: Record<string, string> = {
  "All Projects": "Overview",
  "Web Apps": "Web Apps",
  Games: "Games",
  Learning: "Learning",
  Experiments: "Experiments",
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [activeNavLabel, setActiveNavLabel] = useState("Overview");
  const [sort, setSort] = useState<"Latest" | "Title A–Z">("Latest");

  function selectCategory(category: string) {
    setActiveCategory(category);
    setActiveNavLabel(categoryToNavLabel[category] ?? "Overview");
  }

  const filtered = useMemo(() => {
    const bySearchAndCategory = projects.filter((project) => {
      const matchesQuery = `${project.title} ${project.description}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory =
        activeCategory === "All Projects" || project.category === activeCategory;
      return matchesQuery && matchesCategory;
    });

    return sort === "Title A–Z"
      ? [...bySearchAndCategory].sort((a, b) => a.title.localeCompare(b.title))
      : bySearchAndCategory;
  }, [query, activeCategory, sort]);

  const liveCount = projects.filter((p) => p.status === "live").length;

  return (
    <div className="relative min-h-screen bg-base font-sans text-primary">
      <BackgroundDecor />
      <SiteHeader query={query} onQueryChange={setQuery} />

      <Sidebar
        activeLabel={activeNavLabel}
        onSelect={(label, category) => {
          if (category) {
            selectCategory(category);
          } else {
            setActiveNavLabel(label);
          }
        }}
      />

      <div className="pt-16 lg:pl-60">
        <main className="relative min-w-0 px-6 py-10 sm:px-10">
          <HeroSection projectCount={projects.length} liveCount={liveCount} />

          <div className="mt-10">
            <FilterTabs
              activeCategory={activeCategory}
              onSelectCategory={selectCategory}
              sort={sort}
              onSortChange={setSort}
            />
          </div>

          {filtered.length === 0 ? (
            <p className="mt-8 font-mono text-xs text-muted">
              no projects match &quot;{query}&quot;
            </p>
          ) : (
            <div className="mt-6 flex flex-col gap-4">
              {filtered.map((project) => (
                <ProjectRow
                  key={project.slug}
                  project={project}
                  index={projects.indexOf(project)}
                  total={projects.length}
                />
              ))}
            </div>
          )}
        </main>

        <footer className="relative border-t border-edge px-6 py-6 text-center font-mono text-xs text-muted">
          <p>{"</> Ship small. Learn fast. Build what matters."}</p>
        </footer>
      </div>
    </div>
  );
}
