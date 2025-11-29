import Image from "next/image";
import garvit from "@/assets/garvit.jpeg";
  import img from "@/assets/img2.png"
import {HiOutlineArrowRight} from "react-icons/hi";
import {LuLinkedin} from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaArrowDownLong } from "react-icons/fa6";

function Home() {
  return (
    <section
      id="home"
      className="w-screen h-screen flex flex-col justify-center items-center  bg-[radial-gradient(circle,rgba(252,70,107,0.2)_0%,rgba(17,24,39,0.2)_70%)]"
    >
      <Image
        src={img}
        alt="Garvit Singhal"
        title="Hey It's Me"
        quality="95"
        priority={true}
        className=" w-50 rounded-full object-cover"
      />
      <div className="md:mt-15 mt-5 text-2xl sm:text-4xl text-center leading-12 sm:leading-16">
        Hello👋, I&apos;m{" "}
        <b className="text-3xl sm:text-5xl text-shadow-lg font-mono"> Garvit Singhal </b>
        <br />
        I&apos;m a{" "}
        <i>
          {"< "}Full Stack Developer{" />"}
        </i>{" "}
        <br /> who <span className="animate-pulse">❤️</span> to build cool 😎
        stuff !!!
      </div>

      <div className="Btns flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
        <a
          href="/cv"
          className="group bg-gray-900 text-white mt-4 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          target="_blank"
        >
          My Resume
          <HiOutlineArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/singhal-garvit"
          target="_blank"
          className="bg-white p-2 text-gray-700 mt-3 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <LuLinkedin />
        </a>
        <a
          href="https://github.com/singhalgarvit"
          target="_blank"
          className="bg-white p-2 text-gray-700 mt-3 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FiGithub />
        </a>
      </div>
    </section>
  );
}

export default Home;