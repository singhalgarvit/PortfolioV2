import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";

function Contact() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-bg-elevated via-bg-elevated to-accent/5 px-8 py-14 md:px-14 md:py-16">
          <div
            className="pointer-events-none absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-2 font-mono text-sm text-accent">05 — Contact</p>
              <h2
                id="contact-heading"
                className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl"
              >
                Let&apos;s build something solid
              </h2>
              <p className="mt-4 max-w-md text-text-muted">
                Open to internships, collaborations, and interesting product work. Best reached via LinkedIn;
                Resume is one click from the hero.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
              <a
                href="https://www.linkedin.com/in/singhal-garvit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm font-medium text-text transition hover:border-accent/40 hover:text-accent"
              >
                <LuLinkedin className="h-5 w-5" aria-hidden />
                LinkedIn
              </a>
              <a
                href="https://github.com/singhalgarvit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm font-medium text-text transition hover:border-accent/40 hover:text-accent"
              >
                <FiGithub className="h-5 w-5" aria-hidden />
                GitHub
              </a>
              <a
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-bg transition hover:bg-accent-strong"
              >
                <FiFileText className="h-5 w-5" aria-hidden />
                Resume/ CV
              </a>
            </div>
          </div>
          <p className="relative mt-12 border-t border-border pt-8 text-center font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} Garvit Singhal — built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
