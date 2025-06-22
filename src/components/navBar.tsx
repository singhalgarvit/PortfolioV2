"use client"

import {TbHomeFilled} from "react-icons/tb";
import {TbUserFilled} from "react-icons/tb";
import {TbCompassFilled} from "react-icons/tb";
import {IoMdCodeDownload} from "react-icons/io";
import {TbFolderFilled} from "react-icons/tb";
import {MdContactPage} from "react-icons/md";
import {IconContext} from "react-icons";

function NavBar() {
  return (
    <div className="fixed top-2 md:top-5 left-1/2 -translate-x-1/2 p-4 rounded-4xl w-auto bg-black shadow-2xl/30 ">
      <IconContext.Provider value={{size:"25", className: "mx-2.5 text-gray-600 hover:text-white active:text-black cursor-pointer duration-300"}}>
        <div className="flex content-between md:gap-3.5 justify-center w-fit ">
          <a href="#home">
            <TbHomeFilled
              title="Home"
            />
          </a>
          <a href="#about">
            <TbUserFilled
              title="About"
            />
          </a>
          <a href="#skills">
            <IoMdCodeDownload
              title="Skills"
            />
          </a>
          <a href="#experience">
            <TbCompassFilled
              title="Experience"
            />
          </a>
          <a href="#projects">
            <TbFolderFilled
              title="Projects"
            />
          </a>
          <a href="#contact">
            <MdContactPage
              title="Contact"
            />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
}
export default NavBar;
