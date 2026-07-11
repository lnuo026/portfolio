const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '/Nuona-Liang-CV.docx', label: 'Resume', external: true },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4">
        <a
          href="#about"
          className="shrink-0 whitespace-nowrap font-medium text-[var(--text-h)] tracking-tight"
        >
          Nuona Liang
        </a>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--text)] sm:gap-x-5 sm:text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { download: true } : {})}
                className="whitespace-nowrap transition-colors hover:text-[var(--accent)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
