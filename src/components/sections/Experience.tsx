"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import SectionHeader from "@/src/components/SectionHeader";

const experiences = [
    {
        company: "LUDI (Laboratório de pesquisa e desenvolvimento para Usabilidade, Diversidade e Inclusão)",
        role: "Estagiária em Desenvolvolvimento Frontend",
        period: "Março/2026 — Julho/2026",
        description: [
            "Desenvolvi e validei formulários multi-step de alta complexidade."
        ],
        tools: ["React-ts", "Zod", "React-hook-form", "TypeScript", "Validação de formulários", "Toasters"],
    },
    {
        company: "Include jr",
        role: "Desenvolvedora web",
        period: "Janeiro/2025 — Março/2026",
        description: [
            "Atuei como tech lead na área do frontend, revisando códigos, dando feedback e definindo stack e arquitetura de projetos ",
            "Fiz parte do desenvolvimento de projetos do inicio ao fim.",
            "Auxiliei no desenvolvimento backend criando funcionalidades de api RESTs em express seguindo a arquitetura limpa."
            
        ],
        tools: ["Next.js", "Tailwind CSS", "Typescript", "axios", "express", "Styled Components", "api REST", "Node js", 
            "Metodologias ágeis (scrum)"
        ],
    },
    {
        company: "Steno Solutions",
        role: "Estagiária de Desenvolvimento",
        period: "Agosto/2023 — Dezembro/2023",
        description: [
            "Participei do desenvolvimento em dupla de criação de telas e componentes.",
            "Prestei apoio na prototipação de alta fidelidade.",
        ],
        tools: ["React", "Figma", "UX/UI", "Javascript", "Git/Github", "Vite", "Acessibilidade para web"],
    },
];

export default function Experience() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section id="experience" className="container py-28 md:py-36">
            <div className="max-w-full space-y-10">
                <SectionHeader eyebrow="Trajetória" title="Experiência" />

                <div className="space-y-3">
                    {experiences.map((exp, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className="rounded-xl border border-white/6 bg-white/2 transition-colors duration-200 hover:border-white/10"
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <div className="min-w-0 space-y-1">
                                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                            <span className="text-base font-medium text-foreground">
                                                {exp.company}
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                {exp.role}
                                            </span>
                                        </div>
                                        <p className="text-xs tracking-wide text-muted-foreground/60">
                                            {exp.period}
                                        </p>
                                    </div>
                                    <FiChevronDown
                                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Dropdown content */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-5 pt-0 space-y-4">
                                            <div className="h-px w-full bg-white/6" />
                                            <ul className="list-disc list-outside ml-4 text-sm leading-relaxed text-muted-foreground space-y-1">
                                                {exp.description.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tools.map((tool) => (
                                                    <span
                                                        key={tool}
                                                        className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs text-muted-foreground"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
