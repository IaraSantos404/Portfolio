import Link from "next/link";
import ProjectCard from "@/src/components/ProjectCard";
import SectionHeader from "@/src/components/SectionHeader";
import { projects } from "@/src/data/projects";

export default function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="container py-28 md:py-36">
      <div className="space-y-10">
        <SectionHeader eyebrow="Portfólio" title="Projetos" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Link
            href="/projetos"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300 hover:shadow-[0_0_24px_-6px_rgba(139,92,246,0.3)]"
          >
            Ver todos os projetos
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

