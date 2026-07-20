export default function About() {
    return (
        <section id="about" className="container py-32 md:py-40">
            <div className="max-w-2xl space-y-10">

                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Sobre mim
                </p>

                <div className="space-y-6">
                    <p className="text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
                        Olá, eu sou a{" "}
                        <span className="bg-linear-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                            Iara
                        </span>
                        .
                    </p>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Desenvolvedora Full Stack e entusiasta de IA. Sou apaixonada
                        por código e por criar coisas — sinto que uma vida não é o
                        bastante pra aprender tudo que eu gostaria nessa área. Mesmo
                        assim, busco estar em constante evolução.
                    </p>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Sinta-se à vontade para entrar em contato.{" "}
                        <span className="text-foreground font-medium">
                            Vamos construir algo juntos?
                        </span>
                    </p>
                </div>

                <div className="h-px w-12 bg-linear-to-r from-violet-500 to-transparent" />

            </div>
        </section>
    );
}