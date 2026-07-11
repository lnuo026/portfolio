import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight text-[var(--text-h)]">
        Projects
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium text-[var(--text-h)]">
                {p.title}
              </h3>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                {p.year}
              </span>
            </div>
            <p className="mt-1 text-xs font-medium text-[var(--accent)]">
              {p.tag}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">
              {p.description}
            </p>
            {p.image && (
              <img
                src={p.image}
                alt={p.imageAlt ?? ''}
                className="mt-4 w-full max-w-sm rounded-lg border border-[var(--border)]"
              />
            )}
            <ul className="mt-3 flex flex-col gap-1.5">
              {p.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-2 text-sm leading-relaxed text-[var(--text)]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-[var(--tag-bg)] px-2 py-1 font-mono text-xs text-[var(--text)]"
                >
                  {s}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                {p.linkLabel ?? 'View'} ↗
              </a>
            )}
            {!p.link && p.privateRepo && (
              <p className="mt-4 text-sm italic text-[var(--text-muted)]">
                Private repo — available on request
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
