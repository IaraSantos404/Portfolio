import SectionHeader from "@/src/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="container py-28 md:py-36">
      <div className="max-w-2xl space-y-10">
        <SectionHeader eyebrow="Sobre mim" title="Olá, eu sou a Iara." />

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Desenvolvedora Full Stack com foco em frontend e entusiasta da área de IA e Machine Learning. Sou apaixonada
            por código e por criar coisas — sinto que uma vida não é o
            bastante pra aprender tudo que eu gostaria nessa área. Mesmo
            assim, busco estar em constante evolução.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Sinta-se à vontade para entrar em contato.{" "}
            <span className="font-medium text-foreground">
              Vamos construir algo juntos?
            </span>
          </p>
        </div>

        <div className="h-px w-12 bg-linear-to-r from-violet-500 to-transparent" />
      </div>
    </section>
  );
}