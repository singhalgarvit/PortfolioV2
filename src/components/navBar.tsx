"use client";

import { TbHomeFilled, TbUserFilled, TbCompassFilled, TbFolderFilled } from "react-icons/tb";
import { IoMdCodeDownload } from "react-icons/io";
import { MdContactPage } from "react-icons/md";

const links = [
  { href: "#home", label: "Home", Icon: TbHomeFilled },
  { href: "#about", label: "About", Icon: TbUserFilled },
  { href: "#skills", label: "Skills", Icon: IoMdCodeDownload },
  { href: "#experience", label: "Experience", Icon: TbCompassFilled },
  { href: "#projects", label: "Projects", Icon: TbFolderFilled },
  { href: "#contact", label: "Contact", Icon: MdContactPage },
] as const;

function NavBar() {
  return (
    <nav
      aria-label="Primary"
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-min -translate-x-1/2 md:top-6"
    >
      <div className="flex items-center justify-center gap-0.5 rounded-2xl border border-border bg-bg-elevated/80 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl md:gap-1 md:px-3">
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            title={label}
            aria-label={label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl text-text-muted transition-colors hover:bg-surface-hover hover:text-accent md:h-10 md:w-10"
          >
            <Icon className="h-[22px] w-[22px] shrink-0 md:h-5 md:w-5" aria-hidden />
            <span className="pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-bg-elevated px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-text opacity-0 transition-opacity group-hover:opacity-100 md:block">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
