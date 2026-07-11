export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <p className="mb-3 text-sm font-medium text-[var(--accent)]">
        Full-Stack Developer
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-h)] sm:text-5xl">
        Nuona Liang
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text)] sm:text-lg">
        Master of Information Technology student at the University of Auckland,
        building full-stack products with React, TypeScript, NestJS, and MongoDB —
        with hands-on detours into Android security, reverse engineering, and AI
        agents. Three years managing retail operations before this adds a business
        and user-first lens most engineers don&rsquo;t start with.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          View Projects
        </a>
        <a
          href="https://github.com/lnuo026"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text-h)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
