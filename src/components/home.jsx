import TextType from "../animations/textType"
import DarkVeil from "../animations/background"
import { IoLogoGithub } from "react-icons/io";
import { BsEnvelopePaper } from "react-icons/bs";
import Curriculo from "../assets/curriculo.pdf"
import Me from "../assets/myimg.jpg"

export default function Home(){
  return(
    <section id="home">
      <div className="w-full min-h-screen relative" >
        <DarkVeil />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 z-10 flex items-center mb-[2em] justify-center px-4 py-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
              {/* Conteúdo de texto */}
              <div className="text-center lg:text-left flex-1 order-2 lg:order-1 w-screen">
                <div className="text-black  w-full">
                  <TextType 
                    text={["Olá, eu sou a Iara."]}
                    typingSpeed={90}
                    pauseDuration={1000}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                  <p className="text-gray-400 mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Desenvolvedora Frontend
                  </p>
                  
                  {/* Botões */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-6 lg:pt-7 md:w-full  w-[90%] mx-auto">
                    <a 
                      className="w-full sm:w-auto" 
                      target="_blank" 
                      href={Curriculo} 
                      download="curriculo-iara.pdf"
                    >
                      <button className="bg-primary flex items-center gap-3 justify-center border border-gray-600 p-3 w-full sm:w-40 cursor-pointer rounded-2xl text-white hover:bg-primary/80 transition-colors">
                        <BsEnvelopePaper />
                        Baixar CV
                      </button>
                    </a>
                    
                    <a 
                      className="w-full sm:w-auto" 
                      target="_blank" 
                      href="https://github.com/IaraSantos404"
                    >
                      <button className="bg-black flex items-center gap-3 justify-center border border-gray-600 p-3 w-full sm:w-40 cursor-pointer rounded-2xl text-white hover:bg-gray-800 transition-colors">
                        <IoLogoGithub />
                        Ver Projetos
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Imagem */}
              <div className="flex justify-center order-1 lg:order-2 flex-shrink-0">
                <img 
                  src={Me} 
                  alt="Iara Santos" 
                  className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-glow border-4 border-primary/20" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}