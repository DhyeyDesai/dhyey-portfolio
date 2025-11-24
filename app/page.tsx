import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import BackgroundVectors from "@/components/BackgroundVectors";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background relative">
      <Navbar />
      <BackgroundVectors />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
