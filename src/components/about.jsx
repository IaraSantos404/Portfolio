import Code from "../assets/code.svg"

export default function About() {
  return (
    <section id="about" className="bg-[var(--color-background)]">
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          
          <img 
            width={400} 
            src={Code} 
            alt="Código representando programação" 
            className="rounded-lg shadow-lg"
          />

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Sobre <span className="text-secondary">Mim</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Sou um desenvolvedor apaixonado por tecnologia e programação. 
              Gosto de transformar ideias em soluções digitais funcionais e criativas. 
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Atualmente, estudo e trabalho com <span className="text-secondary font-semibold">React, 
              TailwindCSS e Node.js</span>, sempre buscando evoluir minhas habilidades e aprender novas ferramentas.
            </p>

            {/* <button className="mt-6 px-6 py-3 bg-secondary text-white font-semibold rounded-md hover:bg-secondary/80 transition">
              Ver Portfólio
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
