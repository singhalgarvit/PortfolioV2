import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/home";
import NavBar from "@/components/navBar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <NavBar />
      <main>
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
