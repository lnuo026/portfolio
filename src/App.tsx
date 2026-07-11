import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-svh bg-[var(--bg)]">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-[var(--border)] px-6 py-8 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Nuona Liang
      </footer>
    </div>
  );
}
