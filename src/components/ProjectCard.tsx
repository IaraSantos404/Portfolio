import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export interface Projects {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  github?: string;
  live?: string;
}


export default function ProjectCard({ project }: { project: Projects }) {
  return (
    <div key={project.title}
      className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/2 transition-all duration-500 hover:border-violet-500/20 hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.15)]">
      <div className="flex flex-col">
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
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
              {project.tags? (
                project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs text-muted-foreground transition-colors duration-200 group-hover:border-violet-500/15 group-hover:text-muted-foreground/80"
                >
                  {tag}
                </span>
              ))
              ) : null}
            
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            {project.github?  (
              <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-center flex-1 gap-2 rounded-lg border border-white/8 bg-white/3 px-4 py-2 text-sm text-muted-foreground
              transition-all duration-200 hover:border-white/15 hover:text-foreground"
            >
              <FiGithub className="h-4 w-4" />
              Código
            </a>
            ) : null}
          
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center gap-2 rounded-lg border text-center border-violet-500/25
              bg-violet-500/8 px-4 py-2 text-sm text-violet-300 transition-all duration-200 hover:bg-violet-500/15 hover:text-violet-200"
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