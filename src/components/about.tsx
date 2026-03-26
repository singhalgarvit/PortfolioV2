function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-t border-border px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-sm text-accent">01 — About</p>
            <h2
              id="about-heading"
              className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl"
            >
              Building products end to end
            </h2>
          </div>
          <p className="max-w-md text-sm text-text-muted md:text-right">
            Engineering student at SKIT, Jaipur — focused on backends that scale and frontends that feel
            effortless.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div className="space-y-6 text-base leading-relaxed text-text-muted md:text-lg">
            <p>
              I&apos;m Garvit Singhal, a final-year engineering student with a strong interest in web and app
              development. What started as curiosity about how websites work turned into a deep dive into
              backend systems, databases, and API design.
            </p>
            <p>
              Today I spend most of my time with <span className="font-mono text-text">Node.js</span>,{" "}
              <span className="font-mono text-text">Express</span>, and{" "}
              <span className="font-mono text-text">MongoDB</span> — building CRUD apps, auth flows, and data
              layers that stay maintainable as features grow. On the front end I care about responsive layouts,
              performance, and clear UX.
            </p>
          </div>
          <aside className="flex flex-col justify-center border-l border-border pl-0 lg:max-w-xs lg:border-l lg:pl-10">
            <blockquote className="font-display text-xl font-semibold leading-snug text-text md:text-2xl">
              &ldquo;Turning ideas into interactive, dependable web experiences.&rdquo;
            </blockquote>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-text-muted">Focus</p>
            <ul className="mt-2 space-y-1 font-mono text-sm text-accent">
              <li>REST APIs &amp; auth</li>
              <li>React / Next.js</li>
              <li>React Native</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
