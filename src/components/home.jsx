import TextType from "../animations/textType"
import DarkVeil from "../animations/background"
import { IoLogoGithub } from "react-icons/io";
import { BsEnvelopePaper } from "react-icons/bs";
import Curriculo from "../assets/curriculo.pdf"
import Me from "../assets/myimg.jpg"

export default function Home(){
  return(
    <section id="home">
      <div className="w-full h-screen relative" >
        <DarkVeil />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 z-10 mt-20">
          <div className="flex flex-wrap justify-around  mt-12 items-center">
            <div className="text-black">
              <TextType 
                text={["Olá, eu sou a Iara."]}
                typingSpeed={90}
                pauseDuration={1000}
                showCursor={true}
                cursorCharacter="|"
              />
              <p className="text-gray-400 mt-1 text-4xl">Desenvolvedora Frontend</p>
              <div className="flex pt-7 gap-3 ">
                  <a className="" target="_blank" href={Curriculo} download="curriculo-iara.pdf">
                    <button className="bg-secondary flex items-center gap-3 justify-center border border-gray-60 p-3 w-40 cursor-pointer rounded-2xl text-white">
                      <BsEnvelopePaper />
                      Baixar CV
                    </button>
                  </a>
                <a className="" target="_blank" href="https://github.com/IaraSantos404">
                  <button className="bg-black flex items-center gap-3 justify-center border border-gray-600 p-3 w-40 cursor-pointer rounded-2xl text-white">
                    <IoLogoGithub />
                    Ver Projetos
                  </button>
                </a>
                
              </div>
              
            </div>

            <div className="flex justify-center mt-10">
              <img src={Me} alt="Iara Santos" className="rounded-full w-96 h-96 object-cover shadow-glow border-4 border-primary/20" />
            </div>
          </div>
          {/* Talvez colocar redes sociais na parte mais baixa da página */}
        </div>
      </div>
      
      

    </section>
  )
}