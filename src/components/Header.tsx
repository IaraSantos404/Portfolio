

export default function Header(){
    return(
        <header className="flex justify-between px-8 pt-3">
            <div>
                <h1 className="font-bold text-xl">@Code By IARA</h1>
            </div>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <a href="">Sobre</a>
                    </li>
                    <li>
                        <a href="">Projetos</a>
                    </li>
                    <li>
                        <a href="">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}