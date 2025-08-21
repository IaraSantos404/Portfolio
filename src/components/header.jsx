// import useState from "react";
export default function Header() {
  // add experiencia depois
  const sections = ["home", "about", "skills", "projects"];
  // const [activeSection, setActiveSection] = useState("home")

  return (
    <header className="bg-background fixed left-0 right-0 top-0 z-50">
      <div className="flex justify-between mx-auto w-[90%] items-center fi p-3">
        <h1 className="text-primary text-3xl font-bold">Iara Santos</h1>
        <nav className="navigation">
          <ul className="flex space-x-20">
            {sections.map((section) => (
              <li key={section}>
                <a href={`#${section}`} className="text-white">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
        
    </header>
  );
}
