const groups: { label: string; items: string[] }[] = [
  {
    label: 'Languages & Low-level',
    items: ['Java', 'ARM Assembly', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Frontend',
    items: ['React', 'React Native (Expo)', 'Svelte (SvelteKit)', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'FastAPI'],
  },
  {
    label: 'Databases',
    items: ['MongoDB (Mongoose, Atlas)', 'SQLite', 'SQL (ER modelling)'],
  },
  {
    label: 'Auth',
    items: ['Google OAuth 2.0 (Passport)', 'JWT (HttpOnly cookie)'],
  },
  {
    label: 'Tools & Practices',
    items: [
      'Git',
      'Docker',
      'GitHub Actions CI/CD',
      'Nginx',
      'Swagger/OpenAPI',
      'Frida / Ghidra / jadx',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight text-[var(--text-h)]">
        Skills
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.label}>
            <h3 className="mb-2.5 text-sm font-medium text-[var(--text-muted)]">
              {g.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-[var(--tag-bg)] px-2.5 py-1 text-sm text-[var(--text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
