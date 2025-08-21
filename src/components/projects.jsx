import CP from "../assets/CP.jpg"
import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects(){
  /* talvez colocar opção de tecnologias futuramente*/
  const projetos = [
    {
      id: 1,
      title: "Ladding page central perk",
      image: CP,
      description: "Uma ladding page fictícia inspirada no icônico Central Perk da série Friends.",
      demoLink: "https://centralperk-cafeteria.vercel.app/",
      codeLink: "https://github.com/IaraSantos404/centralperk-cafeteria"
    }
  ]
  return(
    <section id="projects" className="pt-3">
      <h2 className="text-4xl text-center font-bold py-2 text-white">
        Meus <span className="text-secondary">Projetos</span>
      </h2>
      <p className="text-gray-400 text-center text-[20px]">Projetos que eu desenvolvi</p>

      <div className="cards  flex flex-wrap justify-center gap-8 mt-8">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="card my-4 w-[90%] md:w-[40%] lg-w-[40%] bg-[var(--background)] hover:shadow-xl shadow-primary/10 rounded-[21px] flex flex-col border border-gray-800">
            <div className="w-full h-[320px]">
              <img src={projeto.image} alt={projeto.title} className="w-full h-full object-cover rounded-t-[20px]" />
            </div>
            <div className="p-6 flex flex-col gap-5">
              <h3 className="text-xl font-bold text-white">{projeto.title}</h3>
              <p className="text-gray-400">{projeto.description}</p>
              <div className="flex flex-wrap gap-3 pt-4">
                <a target="_blank" href={projeto.demoLink}>
                  <button className="bg-secondary cursor-pointer flex items-center gap-3 text-white py-2 px-4 rounded-md">
                    <FaExternalLinkAlt />
                    Ver Projeto
                  </button>
                </a>
                <a target="_blank" href={projeto.codeLink}>
                  <button className="bg-black cursor-pointer flex gap-3 items-center text-white py-2 px-4 rounded-md">
                    <IoLogoGithub />
                    Código
                  </button>
                  
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}