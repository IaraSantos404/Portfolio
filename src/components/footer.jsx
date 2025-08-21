import { FaLongArrowAltRight, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const links = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Projetos" },
  ];
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="mb-4 text-lg font-semibold uppercase text-white">Contato</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <div className="hover:text-primary transition-colors flex items-center gap-2">
                <MdEmail size={20} />
                <a href="mailto:iarassantosdev404@gmail.com">
                  iarassantosdev404@gmail.com
                </a>
              </div>
            </li>
            <li>
              <div className="hover:text-primary flex items-center gap-2">
                <FaLinkedin size={20} />
                <a
                  href="https://www.linkedin.com/in/iara-santos-141965287/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </li>
            <li >
              <div className="hover:text-primary flex items-center gap-2">
                <IoLogoGithub size={20} />
                <a
                  href="https://github.com/IaraSantos404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h1 className="mb-4 text-lg font-semibold uppercase text-white">Links</h1>
          <ul className="flex flex-col gap-4">
            {links.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <FaLongArrowAltRight />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        <p>&copy; {currentYear} Iara Santos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
