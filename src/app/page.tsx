import About from "@/components/about";
import Intro from "@/components/home";
import NavBar from "@/components/navBar";

export default function Home() {
  return (
    <div className="items-center">
      <Intro/>
      <NavBar />
      <About/>
    </div>
  );
}
