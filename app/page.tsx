"use client";

import { useState } from "react";
import BackgroundDecor from "./components/BackgroundDecor";
import SiteHeader from "./components/SiteHeader";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = projects.filter((project) =>
    `${project.title} ${project.description}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <div className="relative min-h-screen bg-base font-sans text-primary">
      <BackgroundDecor />
      <SiteHeader query={query} onQueryChange={setQuery} />

      <main className="relative mx-auto w-full max-w-6xl px-6 pt-36 pb-16 sm:px-10">
        <p className="font-mono text-xs tracking-[0.3em] text-muted">
          SELECTED WORK
        </p>
        <h1 className="mt-3 font-display text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
          Projects
        </h1>

        {filtered.length === 0 ? (
          <p className="mt-4 font-mono text-xs text-muted">
            no projects match &quot;{query}&quot;
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filtered.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={projects.indexOf(project)}
                total={projects.length}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="relative mx-auto max-w-6xl border-t border-edge px-6 py-8 font-mono text-xs text-muted sm:px-10">
        <p>Gabriel Malik — {new Date().getFullYear()}</p>
        <p>STATUS: OPERATIONAL · REV.01</p>
      </footer>
    </div>
  );
}
