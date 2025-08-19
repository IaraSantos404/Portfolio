// import useState from "react";
export default function Header() {
  // const sections = ["home", "about", "experience", "skills", "projects"];
  // const [activeSection, setActiveSection] = useState("home")

  return (
    <header className="bg-background">
      <div className="flex justify-between mx-auto w-[90%] items-center p-3">
        <h1 className="text-primary text-3xl font-bold">Iara Santos</h1>
        <nav className="navigation">
          <ul className="flex space-x-20">
            <li>
              <a href="#home" className="text-white">Inicio</a>
            </li>
            <li>
              <a href="#about" className="text-white">Sobre</a>
            </li>
            <li>
              <a href="#experience" className="text-white">Experiência</a>
            </li>
            <li>
              <a href="#skills" className="text-white">Habilidades</a>
            </li>
            <li>
              <a href="#projects" className="text-white">Projetos</a>
            </li>
          </ul>
        </nav>
      </div>
        
    </header>
  );
}
