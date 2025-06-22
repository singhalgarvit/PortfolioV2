import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/home";
import NavBar from "@/components/navBar";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="items-center">
      <Intro/>
      <NavBar />
      <About/>
      <Skills/>
      <Experience/>
    </div>
  );
}
