import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionHeader from "@/src/components/SectionHeader";

const projects = [
  {
    title: "Orbit Analytics",
    description:
      "Dashboard de analytics em tempo real com visualizações interativas e métricas personalizáveis para monitoramento de KPIs empresariais.",
    image: "/projects/dashboard.png",
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Nova AI Chat",
    description:
      "Interface conversacional integrada com modelos de linguagem, suporte a contexto de conversa e respostas em streaming.",
    image: "/projects/chatbot.png",
    tags: ["Next.js", "Python", "OpenAI", "WebSockets"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Stellar Store",
    description:
      "E-commerce completo com catálogo dinâmico, carrinho persistente, checkout integrado e painel administrativo.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-violet-500/20 hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.15)]">
      <div className="flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
        </div>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-colors duration-200 group-hover:border-violet-500/15 group-hover:text-muted-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:border-white/[0.15] hover:text-foreground"
            >
              <FiGithub className="h-4 w-4" />
              Código
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-violet-500/25 bg-violet-500/[0.08] px-4 py-2 text-sm text-violet-300 transition-all duration-200 hover:bg-violet-500/15 hover:text-violet-200"
            >
              <FiExternalLink className="h-4 w-4" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="container py-28 md:py-36">
      <div className="space-y-10">
        <SectionHeader eyebrow="Portfólio" title="Projetos" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
