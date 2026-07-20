import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Experience from "@/src/components/sections/Experience";
import SocialBar from "@/src/components/FloatingSocialBar";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Experience />
      <SocialBar />
    </main>
  );
}

