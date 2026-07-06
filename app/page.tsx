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
    <div className="relative flex flex-1 flex-col bg-black font-sans">
      <BackgroundDecor />

      <div className="relative flex flex-1 flex-col">
        <SiteHeader query={query} onQueryChange={setQuery} />

        <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-16 pb-12 sm:px-10">
          <p className="font-mono text-sm tracking-[0.3em] text-zinc-500">
            SELECTED WORK
          </p>
          <h1 className="mt-3 text-6xl font-extrabold tracking-tight text-zinc-50">
            Projects
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={projects.indexOf(project)}
                total={projects.length}
              />
            ))}
          </div>
        </main>

        <footer className="px-6 py-8 font-mono text-xs text-zinc-600 sm:px-10">
          <p>Gabriel Malik — {new Date().getFullYear()}</p>
          <p>STATUS: OPERATIONAL · REV.01</p>
        </footer>
      </div>
    </div>
  );
}
