"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import type { IconType } from "react-icons";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";

const contentStyle = {
  background: "rgba(255, 255, 255, 0.04)",
  color: "#eef0f5",
  border: "1px solid rgba(255, 255, 255, 0.09)",
} as const;

const contentArrowStyle = {
  borderRight: "7px solid rgba(255, 255, 255, 0.09)",
} as const;

const iconStyle = {
  background: "rgba(94, 234, 212, 0.12)",
  color: "#5eead4",
  boxShadow: "0 0 0 4px #07080c",
} as const;

type ExperienceEntry = {
  id: string;
  date: string;
  title: string;
  company: string;
  bullets: string[];
  Icon: IconType;
};

const experiences: ExperienceEntry[] = [
  {
    id: "Thoughtswin Systems",
    date: "Sep 2025 — Present",
    title: "Full Stack Developer Intern",
    company: "Thoughtswin Systems",
    bullets: [
      "Developed cross-platform mobile application using React Native, enabling consistent user experience across Android and iOS platforms.",
      "Developed a Progressive Web Application (PWA) using Next.js to improve performance, responsiveness, and offline accessibility.",
      "Designed and integrated RESTful APIs, collaborating with backend services to support scalable mobile and web functionalities.",
    ],
    Icon: FaJs,
  },
  {
    id: "automatically-cc",
    date: "Jul 2024 — Dec 2024",
    title: "Software Development Intern",
    company: "Automatically CC",
    bullets: [
      "Built RESTful APIs with Node.js and Express, including authentication and scalable service boundaries.",
      "Shipped CRUD applications such as a blog platform with user auth and post management.",
      "Modeled data with Mongoose for efficient storage and retrieval.",
    ],
    Icon: FaNodeJs,
  },
  {
    id: "pjs-illustration",
    date: "Jan 2024 — May 2024",
    title: "Frontend Developer Intern",
    company: "PJ's Illustration",
    bullets: [
      "Delivered a responsive React site to showcase design work and artwork.",
      "Used AWS S3 for media and lazy loading to improve load times for heavy video content.",
      "Helped grow the client base by ~50%, expanding reach beyond Rajasthan.",
    ],
    Icon: FaReact,
  },
];

const bulletClass =
  "relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70";

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative border-t border-border px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-2 font-mono text-sm text-accent">03 — Experience</p>
          <h2
            id="experience-heading"
            className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl"
          >
            Where I&apos;ve contributed
          </h2>
        </div>
      </div>

      <div className="experience-timeline mx-auto max-w-3xl">
        <VerticalTimeline lineColor="transparent">
          {experiences.map(({ id, date, title, company, bullets, Icon }) => (
            <VerticalTimelineElement
              key={id}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              date={date}
              dateClassName="!text-[0.85rem] !font-mono"
              iconStyle={iconStyle}
              icon={<Icon aria-hidden />}
            >
              <h3 className="vertical-timeline-element-title !font-display !text-lg !font-semibold !text-text">
                {title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle !font-mono !text-sm !text-accent">
                {company}
              </h4>
              <ul className="mt-4 list-none space-y-3 pl-0 text-sm leading-relaxed text-text-muted">
                {bullets.map((text, i) => (
                  <li key={`${id}-${i}`} className={bulletClass}>
                    {text}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
