
export default function Skills(){
  const skills = [
    "React", "Typescript", "TailwindCSS", "Node.js", "Figma", "Git/Github", "Bootstrap", "JavaScript", "HTML", "CSS", "Express.js"
  ]
  return(
    <section id="skills" className="bg-[var(--color-background)] py-16">
      <h2 className="text-4xl text-center font-bold mb-6 py-5 text-white">
        Minhas <span className="text-secondary">Habilidades</span>
      </h2>
      {/* Ou tecnologias & ferramentas */}
      <div className="flex flex-wrap gap-4 justify-center w-[80%] mx-auto">
        {skills.map((skill) => (
          <span
            className="text-lg border bg-black py-2 px-5 border-gray-800 rounded-[20px] text-gray-300  font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-defaul"
          >
            {skill}
              </span>
            ))}
      </div>

    </section>
  )
}