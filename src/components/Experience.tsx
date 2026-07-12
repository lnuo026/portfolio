export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight text-[var(--text-h)]">
        Work Experience
      </h2>
      <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-medium text-[var(--text-h)]">
            Operations Coordinator, Nanjing Xinbai Co., Ltd.
          </h3>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            2021 &ndash; 2024
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">
          Managed daily operations of a retail floor with multiple store
          tenants at a major department store in Nanjing.
        </p>
        <ul className="mt-3 flex flex-col gap-1.5">
          {[
            'Coordinated staff across the floor, tracked store performance, and handled vendor negotiations on lease and promotional terms.',
            'Executed seasonal marketing campaigns end-to-end — materials, scheduling, on-site delivery, and post-event results review — with campaign concepts agreed alongside the store manager.',
            "Ran the company's WeChat community and online channels; wrote promotional copy, internal reports, and admin documents.",
            'Worked closely with teams across departments to keep projects on track.',
          ].map((b) => (
            <li
              key={b}
              className="flex gap-2 text-sm leading-relaxed text-[var(--text)]"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
              {b}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
