import {TbHomeFilled} from "react-icons/tb";
import { TbUserFilled } from "react-icons/tb";
import { TbCompassFilled } from "react-icons/tb";
import { IoMdCodeDownload } from "react-icons/io";
import { TbFolderFilled } from "react-icons/tb";
import { MdContactPage } from "react-icons/md";

function NavBar() {
  return (
    <div className="fixed bottom-0 md:bottom-5 left-1/2 -translate-x-1/2 p-4 rounded-4xl w-auto bg-black shadow-2xl/30 ">                                         
      <div className="flex content-between md:gap-3.5 justify-center w-fit ">
        <a href="#home"><TbHomeFilled size={25} title="Home" className="mx-2.5 text-gray-600 hover:text-white cursor-pointer duration-300" /></a>
        <a href="#about"><TbUserFilled size={25} title="About" className="mx-2.5 text-gray-600 hover:text-white cursor-pointer duration-300" /></a>
        <a href="#experience"><TbCompassFilled size={25} title="Experience" className="mx-2.5 text-gray-600 hover:text-white cursor-pointer duration-300" /></a>
        <a href="#skills"><IoMdCodeDownload size={25} title="Skills" className="mx-2.5 text-gray-600 hover:text-white cursor-pointer duration-300" /></a>
        <a href="#projects"><TbFolderFilled size={25} title="Projects" className="mx-2.5 text-gray-600 hover:text-white cursor-pointer duration-300" /></a>
        <a href="#contact"><MdContactPage size={25} title="Contact" className="mx-2.5 text-gray-600 hover:text-white cursor-pointer duration-300" /></a>
      </div>
    </div>
  );
}
export default NavBar;
