import demoGif from '../assets/Demo.gif';

export interface Project {
  year: string;
  title: string;
  tag: string;
  stack: string[];
  description: string;
  bullets: string[];
  link?: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
  privateRepo?: boolean;
}

export const projects: Project[] = [
  {
    year: '2026',
    title: 'Pet Emergency Triage Agent',
    tag: 'In Progress · Personal',
    stack: ['Python', 'FastAPI', 'Google Gemini API'],
    description:
      'An AI agent that triages pet emergency symptoms through conversational intake.',
    bullets: [
      'Classifies urgency into red / yellow / green tiers to guide owners toward emergency care or home monitoring.',
      'Developing multi-turn symptom intake and location-aware emergency vet lookup; in active daily development, tracked publicly on GitHub.',
    ],
    link: 'https://github.com/lnuo026/pet_agent',
    linkLabel: 'GitHub',
  },
  {
    year: '2026',
    title: 'Virtual Puppy — AI Companion Pet App',
    tag: 'In Progress · Personal',
    stack: ['React', 'Vite', 'TypeScript', 'NestJS', 'MongoDB', 'Gemini API', 'Docker', 'AWS EC2'],
    description:
      'A full-stack virtual pet companion app with an AI chat companion.',
    bullets: [
      'Google OAuth for cross-device sync; AI chat companion powered by Gemini.',
      'Solo build; in active daily development, tracked publicly on GitHub.',
    ],
    link: 'https://puppy.lnuo.me/',
    linkLabel: 'Live',
  },
  {
    year: '2026',
    title: 'Android Security & Reverse Engineering',
    tag: 'Team Project',
    stack: ['Android (Java)', 'NDK (C)', 'Frida', 'Ghidra', 'jadx'],
    description:
      'An AI text-to-image Android app built with defense-in-depth API key protection, plus offensive reverse engineering of peer teams’ apps.',
    bullets: [
      'AI-assisted, defense-in-depth API key protection (R8 obfuscation, NDK native key hiding, multi-algorithm encoding, anti-Frida/anti-root checks); reverse-engineered multiple peer teams’ APKs, extracting keys from all defense categories via static (jadx) and dynamic (Frida) analysis.',
      'Independently reproduced a USENIX Security ’25 paper’s Cross-app OAuth Account Takeover (COAT) attack via a proof-of-concept fake authorization server, and presented the findings to peers.',
    ],
    privateRepo: true,
  },
  {
    year: '2026',
    title: 'FocusForge — 3D Focus-Training Web App',
    tag: 'Team Project · Team OmniPort',
    stack: ['React', 'NestJS', 'MongoDB Atlas', 'Docker', 'AWS EC2'],
    description:
      'A full-stack 3D focus-training mini-game with Google OAuth login and a global leaderboard.',
    bullets: [
      'Built with a modular NestJS backend — MongoDB Atlas, DTO validation, Swagger docs, structured logging, CSRF guard.',
      'Deployed via Docker to AWS EC2 behind Nginx with HTTPS and GitHub Actions CI; collaborated in a 7-person team to complete the project, then independently reproduced the full CI/CD pipeline solo (GHCR, EC2 via SSM).',
    ],
    privateRepo: true,
  },
  {
    year: '2026',
    title: 'CS732 Tech Tutorial — React Native',
    tag: 'Individual Assignment',
    stack: ['React Native', 'Expo', 'TypeScript'],
    description:
      'A self-authored tutorial teaching React Native to peers via two side-by-side implementations of the same app.',
    bullets: [
      'React web vs. React Native/Expo builds of an identical interactive scene, so learners can compare features line-by-line.',
      'Documented key API differences, a working demo GIF, setup instructions, and a troubleshooting guide.',
    ],
    link: 'https://github.com/lnuo026/React_Native',
    linkLabel: 'GitHub',
    image: demoGif,
    imageAlt: 'Demo of the React vs. React Native dog scene tutorial app',
  },
  {
    year: '2025',
    title: 'Personal Blogging Platform',
    tag: 'Team Project',
    stack: ['Svelte', 'Node.js', 'Express', 'SQLite', 'OpenAI API', 'Java Swing'],
    description:
      'A full-stack blog with rich-text editing, nested comments, and AI-powered content tools.',
    bullets: [
      'bcrypt auth, TinyMCE rich-text editing, nested comments, image uploads, and AI-powered article research and header image generation via the OpenAI API.',
      'RESTful APIs with Express, relational schema with SQLite, and a Java Swing admin client — 3-person team, Git PR-based code review.',
    ],
    privateRepo: true,
  },
];
