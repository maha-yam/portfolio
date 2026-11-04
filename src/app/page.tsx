import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About, Contact, Education, Experience, Footer, Projects, Skills } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
