import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import ProjectCard from "@/src/components/ProjectCard";
import SectionHeader from "@/src/components/SectionHeader";
import { projects } from "@/src/data/projects";

export const metadata = {
  title: "Projetos | Portfólio",
  description: "Todos os projetos desenvolvidos por Iara Santos.",
};

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-foreground pb-12">
      <div className="container py-28 md:py-36">
        <div className="space-y-10 mt-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/3 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/8 hover:text-violet-300"
          >
            <FiArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Voltar para início
          </Link>

        
          <div className="text-left">
            <SectionHeader eyebrow="Portfólio" title="Todos os Projetos" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

