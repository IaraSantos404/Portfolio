import { FiGithub, FiHeart } from "react-icons/fi";

const tools = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Icons",
  "Vercel",
];

const inspirations = [
  { name: "Linear", url: "https://linear.app" },
  { name: "Leerob.io", url: "https://leerob.io" },
  { name: "Brittany Chiang", url: "https://brittanychiang.com" },
];

export default function Footer() {
  return (
    <footer className="container mt-8 border-t border-white/[0.06] py-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">

        {/* Feito por */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Feito por
          </p>
          <div className="flex items-center gap-2">
            <FiHeart className="h-3.5 w-3.5 shrink-0 text-violet-400" />
            <span className="text-sm text-foreground font-medium">
              Iara Santos
            </span>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <FiGithub className="h-3.5 w-3.5" />
            github.com/iara
          </a>
        </div>

        {/* Inspirado por */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Inspirado por
          </p>
          <ul className="space-y-2">
            {inspirations.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Ferramentas */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Ferramentas utilizadas
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1 text-xs text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-10 flex items-center justify-between border-t border-white/[0.04] pt-6">
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Iara Santos
        </p>
        <p className="text-xs text-muted-foreground/40">
          Feito com muito café ☕
        </p>
      </div>
    </footer>
  );
}
