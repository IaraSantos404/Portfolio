"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Experiência", href: "#experience" },
  { name: "Projetos", href: "#projects" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu mobile ao redimensionar a janela para telas maiores
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-b border-white/[0.08] bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-8 md:px-16 lg:px-36 flex h-16 items-center justify-between">
        <a
          href="#hero"
          onClick={() => setMobileMenuOpen(false)}
          className="text-sm sm:text-base font-semibold tracking-wider uppercase text-foreground hover:text-violet-400 transition-colors"
        >
          @Code<span className="text-violet-400">ByIara</span>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-violet-300 bg-violet-500/10 border border-violet-500/20 shadow-[0_0_12px_rgba(139,92,246,0.15)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-background/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-violet-300 bg-violet-500/15 border border-violet-500/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}