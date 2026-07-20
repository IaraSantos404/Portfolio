"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const experiences = [
    {
        company: "NovaTech Solutions",
        role: "Desenvolvedora Full Stack",
        period: "2024 — Presente",
        description:
            "Desenvolvimento e manutenção de plataformas internas focadas em automação de processos. Participação ativa na migração de sistemas legados para arquitetura moderna baseada em microserviços.",
        tools: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    },
    {
        company: "Pulse Digital",
        role: "Desenvolvedora Front-End",
        period: "2023 — 2024",
        description:
            "Criação de interfaces responsivas e acessíveis para clientes do setor financeiro. Colaboração direta com o time de design para implementar design systems e componentizar a UI.",
        tools: ["Next.js", "Tailwind CSS", "Figma", "Storybook", "Jest"],
    },
    {
        company: "DataSphere Labs",
        role: "Estagiária de Desenvolvimento",
        period: "2022 — 2023",
        description:
            "Apoio no desenvolvimento de dashboards analíticos e integração com APIs de terceiros. Primeiro contato com projetos de machine learning aplicados a dados corporativos.",
        tools: ["Python", "Flask", "React", "Chart.js", "Git"],
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
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Trajetória
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    Experiência
                </h2>

                <div className="space-y-3">
                    {experiences.map((exp, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className="rounded-xl border border-white/[0.06] bg-white/[0.02] transition-colors duration-200 hover:border-white/[0.1]"
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
                                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {/* Dropdown content */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-5 pt-0 space-y-4">
                                            <div className="h-px w-full bg-white/[0.06]" />
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                {exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tools.map((tool) => (
                                                    <span
                                                        key={tool}
                                                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground"
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
