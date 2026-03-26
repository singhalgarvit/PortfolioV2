import Image from "next/image";
import garvit from "@/assets/garvit.jpg";
import { HiOutlineArrowRight } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaArrowDownLong } from "react-icons/fa6";

function Home() {
  return (
    <header
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28 md:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-accent/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-[90px]"
        aria-hidden
      />

      <div className="relative z-[1] flex w-full max-w-5xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:gap-14 md:text-left">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/50 to-transparent opacity-60 blur-md" />
          <Image
            src={garvit}
            alt="Garvit Singhal"
            width={200}
            height={200}
            quality={95}
            priority
            className="relative h-32 w-32 rounded-full border-2 border-border object-cover shadow-2xl md:h-40 md:w-40"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <p className="font-mono text-sm text-accent md:text-base">
            <span className="text-text-muted">//</span> available for full time jobs &amp; freelance
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-5xl lg:text-6xl">
            Garvit Singhal
          </h1>
          <p className="max-w-xl text-lg text-text-muted md:text-xl">
            Full-stack developer building reliable backends and thoughtful frontends with{" "}
            <span className="font-mono text-text">Node.js</span>,{" "}
            <span className="font-mono text-text">React Native</span>,{" "}
            <span className="font-mono text-text">React</span>, and{" "}
            <span className="font-mono text-text">Next.js</span>.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition hover:bg-accent-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View Resume
              <HiOutlineArrowRight className="h-4 w-4 opacity-90" aria-hidden />
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/singhal-garvit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition hover:border-accent/40 hover:text-accent"
              >
                <LuLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/singhalgarvit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition hover:border-accent/40 hover:text-accent"
              >
                <FiGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-text-muted transition hover:text-accent"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em]">Scroll</span>
        <FaArrowDownLong className="h-6 w-6 animate-bounce opacity-50" aria-hidden />
      </a>
    </header>
  );
}

export default Home;
