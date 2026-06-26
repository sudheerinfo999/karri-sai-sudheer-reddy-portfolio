import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Background } from "@/components/Background";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Writing } from "@/components/Writing";

export default function Page() {
  return (
    <>
      <Background />
      <Nav />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Writing />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
