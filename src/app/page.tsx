import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About, Certifications, Contact, Education, Experience, Footer, Projects, Skills } from "@/components/Sections";

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
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
