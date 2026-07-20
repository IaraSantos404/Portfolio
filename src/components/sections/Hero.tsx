import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="container min-h-screen flex items-center">
      <div className="max-w-xl space-y-5 text-left md:space-y-6 floating">
        <p className="text-base uppercase tracking-[0.22em] text-muted-foreground md:text-lg">
          Olá mundo, eu sou
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] text-foreground md:text-7xl">
          Iara Santos
        </h1>
        <h2 className="text-2xl font-semibold text-primary md:text-3xl">
          Desenvolvedora Full Stack
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          Transformo ideias em experiências digitais.
        </p>
        <div className="flex flex-wrap gap-4 pt-3">
          {/* Tranformar esses buttons em componente depois */}
          <button className="cursor-pointer rounded-xl border flex items-center justify-center
              border-primary/30 bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <FiDownload className="mr-2 h-5 w-5" />
            Download CV
          </button>
          <button className="cursor-pointer rounded-xl
              border flex items-center justify-center border-border bg-background/60 px-6 py-3 font-semibold text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:text-accent-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <FaArrowRight className="mr-2 h-5 w-5" />
            Ver projetos
          </button>
        </div>
      </div>
    </section>
  )
}