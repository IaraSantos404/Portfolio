import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-4 sm:px-8 md:px-16 lg:px-36 pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-0 md:min-h-screen flex items-center"
    >
      <div className="max-w-2xl space-y-4 sm:space-y-5 md:space-y-6 text-left floating">
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.22em] text-muted-foreground">
          Olá mundo, eu sou
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-foreground">
          Iara Santos
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
          Desenvolvedora Full Stack
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground max-w-lg">
          Transformo ideias em experiências digitais.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-3">
          <a
            href="/cv.pdf"
            download
            className="w-full sm:w-auto cursor-pointer rounded-xl border flex items-center justify-center
              border-primary/30 bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <FiDownload className="mr-2 h-5 w-5" />
            Download CV
          </a>
          <Link
            href="/projetos"
            className="w-full sm:w-auto cursor-pointer rounded-xl
              border flex items-center justify-center border-border bg-background/60 px-6 py-3 font-semibold text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:text-accent-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <FaArrowRight className="mr-2 h-5 w-5" />
            Ver projetos
          </Link>
        </div>
      </div>
    </section>
  );
}