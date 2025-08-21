import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";

export default function Header() {
  const sections = ["home", "about", "skills", "projects"];
  const [isActive, setIsActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 fixed inset-x-0 top-0 z-50">
        <div className="mx-auto w-[90%] flex items-center justify-between p-3">
          <h1 className="text-primary text-3xl font-bold">Iara Santos</h1>

          <nav className="hidden md:block">
            <ul className="flex gap-10">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={` hover:text-primary pb-[3px] transition ${isActive === section ? "text-secondary border-primary  border-b-[2.5px]" : "text-white"}`}
                    onClick={() => setIsActive(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão Mobile */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <FaXmark size={24} /> : <IoMenuSharp size={28} />}
          </button>
        </div>

      </header>
        
        {isOpen && (
          <button
            className="fixed inset-0 bg-black/20 backdrop-blur-[5px] md:hidden"
            aria-label="Fechar menu"
            onClick={closeMenu}
          />
        )}

        <div
          id="mobile-menu"
          className={`fixed right-0 top-0 z-[60] h-screen w-72 border-l border-white/10 bg-background/90 backdrop-blur-[8px] transition-transform duration-300 ease-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-primary font-bold">Menu</span>
            <button
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              aria-label="Fechar"
              onClick={closeMenu}
            >
              <FaXmark size={22} className="text-primary" />
            </button>
          </div>

          {/* Links do menu */}
          <nav>
            <ul className="flex flex-col gap-1 p-4">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`block rounded-lg px-3 py-2  hover:bg-white/10 hover:text-primary transition 
                      ${isActive === section ? "text-secondary bg-gray-600/25" : "text-white"}`}
                    onClick={() => setIsActive(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </>
    
  );
}
