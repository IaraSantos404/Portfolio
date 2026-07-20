"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Experiência", href: "#experience" },
  { name: "Projetos", href: "#projects" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-background/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#hero"
          className="text-sm font-semibold tracking-wider uppercase text-foreground hover:text-violet-400 transition-colors"
        >
          @Code<span className="text-violet-400">ByIara</span>
        </a>

        {/* Navigation */}
        <nav>
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
      </div>
    </header>
  );
}