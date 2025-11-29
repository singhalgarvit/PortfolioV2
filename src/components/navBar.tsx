"use client";

import { Home, Folder, Briefcase, Contact, Plus } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

interface NavBarProps {
  swiper: SwiperType | null;
}

function NavBar({ swiper }: NavBarProps) {
  const navItems = [
    {
      icon: <Home size={24} strokeWidth={2} />,
      slide: 0,
      title: "Home",
    },
    {
      icon: <Briefcase size={24} strokeWidth={2} />,
      slide: 1,
      title: "Experience",
    },
    {
      icon: <Folder size={24} strokeWidth={2} />,
      slide: 2,
      title: "Projects",
    },
    {
      icon: <Contact size={24} strokeWidth={2} />,
      slide: 3,
      title: "Contact",
    },
  ];

  return (
    <nav className="md:px-6 py-2 px-3 fixed w-full bottom-0 z-50">
      <div className="flex md:px-6 py-3 px-3 items-center justify-between max-w-xl w-[100%] mx-auto rounded-3xl backdrop-blur-lg bg-black/30 border border-white/10">
        <div className="flex items-center md:gap-6 gap-2">
          {navItems.map((data, idx) => (
            <button
              key={idx}
              onClick={() => swiper?.slideTo(data.slide)}
              className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-neutral-800"
              title={data.title}
            >
              {data.icon}
            </button>
          ))}
        </div>

        <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors font-medium">
          <Plus size={20} strokeWidth={2} />
          Hire Me
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
