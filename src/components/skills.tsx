"use client";

import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiPostman } from "react-icons/si";

const stack = [
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: RiNextjsFill },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "JavaScript", Icon: FaJs },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3 },
  { name: "Tailwind", Icon: RiTailwindCssFill },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Java", Icon: FaJava },
  { name: "Git", Icon: FaGitAlt },
  { name: "Postman", Icon: SiPostman },
  { name: "React Native", Icon: FaReact },
] as const;

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-t border-border px-6 py-24 md:px-12 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/5 blur-[80px]" aria-hidden />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-2 font-mono text-sm text-accent">02 — Stack</p>
          <h2
            id="skills-heading"
            className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl"
          >
            Tools I work with
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Day-to-day technologies for APIs, interfaces, and shipping to production.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {stack.map(({ name, Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-6 transition hover:border-accent/30 hover:bg-surface-hover"
            >
              <Icon
                className="h-9 w-9 text-text-muted transition group-hover:text-accent"
                aria-hidden
              />
              <span className="font-mono text-xs text-text">{name}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-bg-elevated/50 py-4">
          <Marquee pauseOnHover autoFill gradient gradientColor="rgb(7, 8, 12)">
            {stack.map(({ name, Icon }) => (
              <span
                key={`m-${name}`}
                className="mx-6 flex items-center gap-2 font-mono text-sm text-text-muted"
              >
                <Icon className="h-5 w-5 text-accent/80" aria-hidden />
                {name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Skills;
