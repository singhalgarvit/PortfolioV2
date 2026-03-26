import { FiExternalLink, FiGithub } from "react-icons/fi";

type Project = {
  id: string;
  title: string;
  bullets: string[];
  tags: string[];
  github: string;
  /** Live demo / deployed site */
  live: string;
};

const projects: Project[] = [
  {
    id: "medtech",
    title: "Medtech Platform",
    bullets: [
      "Built MedTech, a full-stack healthcare platform bridging the gap between patients and doctors with seamless appointment booking and doctor discovery.",
      "Developed AI-powered illness guidance assistant to provide preliminary medical insights and improve patient engagement.",
      "Implemented role-based dashboards (doctor & patient) for managing appointments, profiles, and interactions efficiently.",
      "Designed a scalable architecture (frontend + backend separation) enabling future microservices expansion.",
      "Integrated Razorpay to enable seamless and secure online transactions to book appointments.",
    ],
    tags: ["Node JS", "JavaScript", "MongoDB", "Auth", "Razorpay","React JS"],
    github: "https://github.com/singhalgarvit/MedTech",
    live: "https://medtech.garvitsinghal.in/",
  },
  {
    id: "shiksha-setu",
    title: "Shiksha Setu — E-Learning Platform",
    bullets: [
      "Responsive React UI for courses, progress, and learner dashboards.",
      "Admin Panel: Developed a comprehensive admin dashboard for efficient course and user management.",
      "Authentication: Implemented JWT-based authentication, ensuring secure access control for both users and administrators.",
      "Payment Gateway: Integrated Razorpay to enable seamless and secure online transactions."
    ],
    tags: ["React", "Node JS", "JavaScript", "Razorpay", "Auth" , "MongoDB" , "AWS S3"],
    github: "https://github.com/singhalgarvit/E-Learning-Platform",
    live: "https://shikshasetu.garvitsinghal.in",
  },
  {
    id: "verdant-autobots",
    title: "Verdant Autobots",
    bullets: [
      "Successfully delivered a freelancing project that later attracted investors to fund the client's company.",
      "Developed a complete backend for the admin panel, implementing secure and efficient CRUD operations.",
      "Integrated backend APIs seamlessly with the frontend, ensuring smooth and responsive user interactions.",
    ],
    tags: ["Node JS", "JavaScript", "MongoDB", "Auth", "React JS"],
    github: "https://github.com/singhalgarvit",
    live: " https://verdantautobots.com",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-t border-border px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 md:mb-16">
          <p className="mb-2 font-mono text-sm text-accent">04 — Work</p>
          <h2
            id="projects-heading"
            className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl"
          >
            Selected projects
          </h2>
        </div>

        <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface via-bg-elevated/30 to-bg-elevated/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition-[border-color,box-shadow] duration-300 hover:border-accent/30 hover:shadow-[0_24px_48px_-24px_rgba(94,234,212,0.12)]"
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent/[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-100 group-hover:bg-accent/10"
                aria-hidden
              />
              <div
                className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-accent via-accent/40 to-transparent opacity-90"
                aria-hidden
              />

              <div className="relative flex min-h-0 flex-1 flex-col pl-5 pr-5 pt-6 pb-5 sm:pl-6">
                <div className="mb-5 flex flex-col gap-4 sm:items-start sm:justify-between">
                  <div className="min-w-0 space-y-1.5">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-accent/80">
                      Case {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-text sm:text-[1.35rem]">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2  sm:items-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/60 px-3 py-1.5 font-mono text-[11px] text-text-muted backdrop-blur-sm transition hover:border-accent/45 hover:text-accent"
                    >
                      <FiGithub className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    </a>
                    <a
                      href={project.live.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/60 px-3 py-1.5 font-mono text-[11px] text-text-muted backdrop-blur-sm transition hover:border-accent/45 hover:text-accent"
                    >
                      <FiExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    </a>
                  </div>
                </div>

                <div className="relative min-h-0 flex-1">
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-10 bg-gradient-to-t from-bg-elevated/95 to-transparent opacity-80 md:opacity-100"
                    aria-hidden
                  />
                  <ul
                    className="max-h-[min(24rem,55vh)] list-none space-y-0 overflow-y-auto overscroll-y-contain rounded-lg bg-black/15 py-2 pl-2 pr-1 ring-1 ring-inset ring-white/[0.04] [scrollbar-color:rgba(255,255,255,0.14)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/15 [&::-webkit-scrollbar-thumb]:hover:bg-white/25"
                    aria-label={`Highlights for ${project.title}`}
                  >
                    {project.bullets.map((text, i) => (
                      <li
                        key={`${project.id}-${i}`}
                        className="flex gap-3 border-b border-border/25 px-2 py-3 last:border-b-0 sm:px-3"
                      >
                        <span
                          className="mt-0.5 flex h-6 min-w-6 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/[0.06] font-mono text-[10px] font-medium tabular-nums text-accent/90"
                          aria-hidden
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="min-w-0 flex-1 text-[13px] leading-[1.65] text-text-muted">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul
                  className="mt-5 flex flex-wrap gap-2 border-t border-border/80 pt-5"
                  aria-label="Technologies"
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-flex items-center rounded-md border border-border/90 bg-surface px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-text-muted transition group-hover:border-accent/20 group-hover:text-text/90">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
