
const tools = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Icons",
  "Vercel",
];

const inspirations = [
  { name: "Swami", url: "https://swamii.me/" },
  { name: "Leerob.io", url: "https://leerob.io" },
];

export default function Footer() {
  return (
    <footer className="px-[10%] mt-8 border-t border-white/6  pt-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Feito por
          </p>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/iara-santos-141965287/" target="_blank" rel="noopener noreferrer"
              className="text-sm text-foreground font-medium">
              Iara Santos
            </a>
          </div>
          <a
            href="https://github.com/IaraSantos404"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] 
            text-muted-foreground transition-colors hover:text-foreground"
          >
            Acompanhe meu trabalho
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

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Stack utilizada
          </p>
          <div className="flex flex-wrap gap-2">
            <ul className="grid grid-cols-1 gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {tool}
                </li>
              ))}
            </ul>

          </div>
        </div>

      </div>

      <div className="mt-10 py-18 text-3lg flex items-center border-t border-white/4">
        <p className="text-2xs text-left text-muted-foreground/50">
          © {new Date().getFullYear()} Iara Santos
        </p>
      </div>
    </footer>
  );
}
