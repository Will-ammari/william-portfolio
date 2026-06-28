import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  TestTube2,
  X,
} from 'lucide-react';
import './styles.css';


function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.15c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.57-.29-5.27-1.28-5.27-5.73 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.19A11.05 11.05 0 0 1 12 5.9c.99 0 1.98.13 2.91.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.6.23 2.78.11 3.07.75.82 1.2 1.85 1.2 3.11 0 4.46-2.71 5.44-5.29 5.72.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.28h-.03ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

const personalInfo = {
  name: 'William Ammari',
  initials: 'WA',
  role: 'Laravel Backend Developer & AI Integration Engineer',
  headline: 'Building clean SaaS APIs, automation workflows, and AI-assisted business systems.',
  location: 'Damascus, Syria | Open to remote backend roles in Germany and Europe',
  email: 'will.ammari007@gmail.com',
  github: 'https://github.com/Will-ammari',
  linkedin: 'https://www.linkedin.com/in/william-ammari',
  cv: '/William-Ammari-CV.pdf',
  photo: '/profile.jpg',
};

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const typeLines = [
  'Laravel Backend Developer',
  'AI Integration Engineer',
  'SaaS API Builder',
  'Automation Workflow Developer',
];

const socials = [
  { label: 'Email', icon: Mail, href: `mailto:${personalInfo.email}` },
  { label: 'LinkedIn', icon: LinkedinIcon, href: personalInfo.linkedin },
  { label: 'GitHub', icon: GithubIcon, href: personalInfo.github },
];

const stats = [
  { value: '3', label: 'Flagship projects' },
  { value: '86+', label: 'Tests in flagship API' },
  { value: 'B2', label: 'English' },
  { value: 'A1', label: 'German learning' },
];

const projects = [
  {
    title: 'ProcurePilot AI',
    type: 'Flagship SaaS Backend',
    domain: 'Procurement SaaS for German and European SMEs',
    description:
      'Production-style Laravel backend for AI-assisted procurement management: purchase requests, supplier quotes, quote analysis, comparison, approvals, invoices, VAT, scorecards, audit logs, and attachments.',
    impact: 'Built as a complete API-first SaaS backend with clean MVC, service layer, policies, Docker, CI, OpenAPI, Postman, and FastAPI integration.',
    tech: ['Laravel', 'PHP 8.3', 'Sanctum', 'MySQL', 'FastAPI', 'Docker', 'CI'],
    metrics: ['86 tests', '303 assertions', 'OpenAPI docs'],
    github: 'https://github.com/Will-ammari/procurepilot-ai',
    accent: 'cyan',
  },
  {
    title: 'KlinikLedger',
    type: 'Healthcare Operations API',
    domain: 'Clinic and practice management backend',
    description:
      'Clinic-scoped Laravel API for doctors, patients, appointments, working hours, invoices, consents, treatment notes, exports, anonymization, and audit trails.',
    impact: 'Shows sensitive-domain backend engineering with scheduling rules, scoped access control, privacy-aware workflows, and documented APIs.',
    tech: ['Laravel', 'Sanctum', 'MySQL', 'Redis', 'Docker', 'Mailpit', 'PHPUnit'],
    metrics: ['Clinic scoping', 'Auditability', 'Dockerized'],
    github: 'https://github.com/Will-ammari/klinikledger',
    accent: 'emerald',
  },
  {
    title: 'FlowGuard AI',
    type: 'AI Workflow Risk Platform',
    domain: 'AI automation risk analysis and engineering controls',
    description:
      'Laravel MVP for mapping AI-powered automation workflows, identifying risk points, scoring findings, and generating structured risk reports.',
    impact: 'Connects backend engineering with AI governance thinking: human review, data handling, fallback paths, audit logs, and external API exposure.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap', 'PHPUnit'],
    metrics: ['Risk engine', 'Reports', 'Audit logs'],
    github: 'https://github.com/Will-ammari/flowguard-ai',
    accent: 'violet',
  },
];

const experiences = [
  {
    role: 'Backend Developer & AI Integration Engineer',
    company: 'Nobalaa.Co',
    location: 'Damascus, Syria',
    period: '03/2024 - Current',
    points: [
      'Develop Laravel APIs and backend systems for web and mobile applications.',
      'Build backend services for dashboards, internal tools, and production platforms.',
      'Integrate third-party APIs, internal services, and AI-powered features.',
    ],
    stack: ['Laravel', 'PHP', 'REST APIs', 'AI Integration', 'MySQL'],
  },
  {
    role: 'AI Automation Developer',
    company: 'Freelance',
    location: 'Remote / Damascus, Syria',
    period: '08/2024 - 01/2025',
    points: [
      'Designed customer-support automation workflows using n8n and webhooks.',
      'Worked on Instagram and WhatsApp message automation logic.',
      'Prepared AI-agent workflows for customer replies and purchase support.',
    ],
    stack: ['n8n', 'Webhooks', 'AI Agents', 'Automation'],
  },
  {
    role: 'Backend Developer',
    company: 'Freelance',
    location: 'Remote / Damascus, Syria',
    period: '06/2025 - 12/2025',
    points: [
      'Built backend APIs for operations and order management.',
      'Integrated backend services with existing database structures.',
      'Tested and documented backend services for maintainability.',
    ],
    stack: ['Backend APIs', 'Databases', 'Documentation'],
  },
];

const skillGroups = [
  { title: 'Backend', icon: Code2, skills: ['PHP', 'Laravel', 'REST APIs', 'MVC', 'Service Layer', 'Form Requests', 'Policies'] },
  { title: 'SaaS & Security', icon: ShieldCheck, skills: ['Sanctum', 'RBAC', 'Multi-Tenant Scoping', 'Audit Logs', 'Validation'] },
  { title: 'Database & DevOps', icon: Database, skills: ['MySQL', 'SQL Server', 'Eloquent ORM', 'Redis', 'Docker', 'GitHub Actions'] },
  { title: 'AI Integration', icon: Sparkles, skills: ['FastAPI', 'Python', 'n8n', 'Webhooks', 'AI Workflows', 'LLM Concepts'] },
  { title: 'Testing & Docs', icon: TestTube2, skills: ['PHPUnit', 'Feature Tests', 'Postman', 'OpenAPI', 'Documentation'] },
  { title: 'AI / ML Foundation', icon: BriefcaseBusiness, skills: ['PyTorch', 'Hugging Face', 'Scikit-learn', 'OpenCV', 'NLP Basics'] },
];

const education = [
  {
    title: 'B.Sc. in Computer Engineering - AI Department',
    place: 'University of Damascus',
    period: '2021 - 2025',
    note: 'Foundation in artificial intelligence, software engineering, data, and backend-oriented project work.',
  },
  {
    title: 'Courses',
    place: 'AI, ML, Deep Learning, Data Analysis, TOEFL',
    period: '2023 - 2024',
    note: 'Continued learning in machine learning, deep learning, data analysis, and English communication.',
  },
];

const languages = [
  { name: 'Arabic', level: 'Native', value: 100 },
  { name: 'English', level: 'B2', value: 78 },
  { name: 'German', level: 'A1 - actively learning', value: 25 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = deleting ? 26 : 48;
    const pause = text === current && !deleting ? 1100 : 0;

    const timeout = setTimeout(() => {
      if (!deleting && text.length < current.length) {
        setText(current.slice(0, text.length + 1));
        return;
      }
      if (!deleting && text.length === current.length) {
        setDeleting(true);
        return;
      }
      if (deleting && text.length > 0) {
        setText(current.slice(0, text.length - 1));
        return;
      }
      setDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
    }, speed + pause);

    return () => clearTimeout(timeout);
  }, [deleting, text, wordIndex, words]);

  return text;
}

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);

      const current = navItems.findLast((item) => {
        const element = document.querySelector(item.href);
        return element && element.getBoundingClientRect().top <= 130;
      });
      if (current) setActive(current.label);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">WA</span>
          <span>
            <strong>William Ammari</strong>
            <small>Backend & AI Integration</small>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={active === item.label ? 'active' : ''}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-github" href={personalInfo.github} target="_blank" rel="noreferrer">
            <GithubIcon size={17} /> GitHub
          </a>
          <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-panel">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  const typed = useTypewriter(typeLines);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-grid" />
      <div className="hero-gradient hero-gradient-one" />
      <div className="hero-gradient hero-gradient-two" />

      <div className="hero-shell">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
          <div className="availability"><span /> Open to backend, Laravel, AI integration, and automation roles</div>
          <h1>
            Hi, I'm <span>William Ammari</span>
          </h1>
          <h2>{typed}<b>|</b></h2>
          <p>{personalInfo.headline}</p>

          <div className="hero-actions">
            <a className="btn primary" href={personalInfo.cv} download>
              <Download size={18} /> Download CV
            </a>
            <a className="btn secondary" href="#contact">
              Get in Touch <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="social-row" aria-label="Social links">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target={social.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" aria-label={social.label}>
                <social.icon size={21} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
          <div className="profile-card">
            <div className="photo-ring">
              <img src={personalInfo.photo} alt="William Ammari" />
            </div>
            <div className="profile-content">
              <span className="eyebrow">portfolio.sh</span>
              <h3>Backend engineer with AI integration focus</h3>
              <div className="terminal-line">$ stack --primary</div>
              <div className="stack-pills">
                {['Laravel', 'FastAPI', 'Docker', 'MySQL', 'CI', 'OpenAPI'].map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="terminal-card">
                <strong>ProcurePilot AI</strong>
                <small>86 tests / 303 assertions · SaaS procurement backend</small>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="stats-bar">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to About">
        <ArrowDown size={22} />
      </a>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp} transition={{ duration: 0.45 }}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function About() {
  const strengths = [
    'Clean Laravel MVC and API-first backend architecture',
    'Service-layer business logic and maintainable code organization',
    'Multi-tenant scoping, policies, validation, and auditability',
    'Practical AI integration through FastAPI, webhooks, and automation workflows',
  ];

  return (
    <section id="about" className="section-shell about-grid">
      <SectionHeading eyebrow="About" title="Backend engineering with business workflow depth" description="I build APIs that are structured, documented, tested, and connected to real operational use cases." />
      <motion.div className="about-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
        <p>
          I am a computer engineer specialized in artificial intelligence with hands-on experience in Laravel backend development, AI feature integration, and automation workflows. My work focuses on turning business processes into secure, maintainable backend systems.
        </p>
        <p>
          My strongest portfolio projects target domains that matter in the German and European market: procurement SaaS, healthcare operations, workflow automation, authorization, audit logs, Dockerized environments, API documentation, and CI-backed test suites.
        </p>
      </motion.div>
      <motion.div className="strength-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
        {strengths.map((item) => (
          <div key={item}><CheckCircle2 size={19} /><span>{item}</span></div>
        ))}
      </motion.div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading eyebrow="Experience" title="Backend, AI integration, and automation experience" description="Professional and freelance work focused on APIs, integrations, internal systems, and AI-powered workflows." />
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.article key={exp.role + exp.company} className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ delay: index * 0.08 }}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-top">
                <div>
                  <h3>{exp.role}</h3>
                  <p>{exp.company} · {exp.location}</p>
                </div>
                <span>{exp.period}</span>
              </div>
              <ul>{exp.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <div className="tag-row">{exp.stack.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading eyebrow="Projects" title="Flagship backend portfolio projects" description="Three focused projects that show SaaS backend architecture, AI integration, documentation, Docker, CI, tests, and business-domain thinking." />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article key={project.title} className={`project-card ${project.accent}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ delay: index * 0.08 }}>
            <div className="project-top">
              <div>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p className="project-domain">{project.domain}</p>
              </div>
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><GithubIcon size={21} /></a>
            </div>
            <p>{project.description}</p>
            <div className="impact-box">{project.impact}</div>
            <div className="metric-row">{project.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
            <div className="tag-row">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-shell education-grid">
      <SectionHeading eyebrow="Education" title="Computer engineering and AI foundation" description="Academic foundation in AI with practical backend engineering and self-driven project building." />
      {education.map((item) => (
        <motion.article key={item.title} className="education-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <span>{item.period}</span>
          <h3>{item.title}</h3>
          <strong>{item.place}</strong>
          <p>{item.note}</p>
        </motion.article>
      ))}
      <motion.div className="language-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
        <h3>Languages</h3>
        {languages.map((language) => (
          <div className="language-row" key={language.name}>
            <div><strong>{language.name}</strong><span>{language.level}</span></div>
            <div className="bar"><i style={{ width: `${language.value}%` }} /></div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading eyebrow="Skills" title="Technical stack" description="A backend-first skill set with Laravel, SaaS architecture, API security, documentation, and practical AI integration." />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article key={group.title} className="skill-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ delay: index * 0.05 }}>
            <div className="skill-head"><group.icon size={22} /><h3>{group.title}</h3></div>
            <div className="tag-row">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div className="contact-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
        <span className="contact-eyebrow">Contact</span>
        <h2>Let’s build a clean backend system.</h2>
        <p>I am open to backend, Laravel, AI integration, and automation roles, especially remote opportunities connected to Germany or the European market.</p>
        <div className="contact-actions">
          <a className="btn primary" href={`mailto:${personalInfo.email}`}><Mail size={18} /> Email Me</a>
          <a className="btn secondary" href={personalInfo.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={18} /> LinkedIn</a>
          <a className="btn secondary" href={personalInfo.github} target="_blank" rel="noreferrer"><GithubIcon size={18} /> GitHub</a>
        </div>
        <div className="location"><MapPin size={18} /> {personalInfo.location}</div>
      </motion.div>
    </section>
  );
}

function App() {
  const preferredTheme = useMemo(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  }, []);
  const [theme, setTheme] = useState(preferredTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">© 2026 William Ammari. Portfolio review only. All rights reserved.</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
