import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Experience from "@/src/components/sections/Experience";
import Projects from "@/src/components/sections/Projects";
import SectionDivider from "@/src/components/SectionDivider";
import Footer from "@/src/components/Footer";
import SocialBar from "@/src/components/FloatingSocialBar";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <Footer />
      <SocialBar />
    </main>
  );
}



