"use client";
import Marquee from "react-fast-marquee";
import {IconContext} from "react-icons";
import {FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs,FaJava, FaGitAlt   } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill  } from "react-icons/ri";
import { SiMongodb, SiPostman  } from "react-icons/si";

function Skills() {
  return (
    <div
      id="skills"
      className="p-3 md:p-15 justify-items-center flex flex-col justify-center items-center gap-2.5"
    >
      <h1 className="text-3xl md:text-5xl">My Skills</h1>
      <IconContext.Provider
        value={{
          size: "70",
          className:
            "mx-10 text-gray-600 hover:text-white active:text-black cursor-pointer duration-300",
        }}
      >
        <Marquee className="mt-20" pauseOnHover={true} autoFill={true}>
          <FaReact />
          <FaNodeJs />
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
          <FaJava />
          <RiNextjsFill />
          <RiTailwindCssFill  />
          <SiMongodb />
          <FaGitAlt />
          <SiPostman />
        </Marquee>
      </IconContext.Provider>
    </div>
  );
}

export default Skills;
