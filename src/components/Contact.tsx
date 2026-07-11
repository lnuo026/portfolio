import { useState } from 'react';

const EMAIL = 'lnuo026@aucklanduni.ac.nz';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — fall back to mailto below
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--text-h)]">
        Contact
      </h2>
      <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text)]">
        Open to software engineering internships — full-stack, frontend, or
        anything that lets me keep learning fast. Reach out any time.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={copyEmail}
          className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {copied ? 'Email Copied ✓' : EMAIL}
        </button>
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
