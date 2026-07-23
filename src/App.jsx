import { useState, useEffect } from "react";
import "./App.css";

/* ─── Skill / Tech Data ─── */
const skills = [
  { name: "Java", icon: "☕", category: "Skill" },
  { name: "Python", icon: "🐍", category: "Skill" },
  { name: "Git", icon: "🔀", category: "Skill" },
  { name: "DSA", icon: "🧩", category: "Skill" },
];

const technologies = [
  { name: "HTML", icon: "🌐", category: "Tech" },
  { name: "JavaScript", icon: "⚡", category: "Tech" },
  { name: "CSS", icon: "🎨", category: "Tech" },
  { name: "React", icon: "⚛️", category: "Tech" },
  { name: "Gen AI / RAG", icon: "🤖", category: "Tech" },
  { name: "LLMs", icon: "🧠", category: "Tech" },
  { name: "Prompt Design", icon: "✍️", category: "Tech" },
];

const interests = [
  {
    title: "Full Stack Development",
    icon: "🖥️",
    desc: "Building end-to-end web applications with modern frontend and backend technologies, crafting seamless user experiences.",
    tags: ["React", "Node.js", "APIs", "Databases"],
  },
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    desc: "Exploring LLMs, RAG pipelines, and prompt engineering to build intelligent, context-aware AI applications.",
    tags: ["RAG", "LLMs", "Prompt Design", "Gen AI"],
  },
];

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#interests", label: "Interests" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#hero" className="nav-logo">
          Reshmi<span>.</span>R
        </a>
        <button
          className={`nav-toggle${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleClick}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">👋 Open to Opportunities</span>
        <h1 className="hero-name">
          Reshmi <span>R</span>
        </h1>
        <p className="hero-title">
          Final Year B.Tech IT · Government College of Technology
        </p>
        <p className="hero-tagline">
          Passionate about <strong>Full Stack Development</strong> &{" "}
          <strong>Artificial Intelligence</strong>. I build modern web
          applications and explore the frontiers of Gen AI, LLMs, and
          intelligent systems.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            📬 Get in Touch
          </a>
          <a href="#skills" className="btn btn-secondary">
            ↓ Explore Skills
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        A quick look into who I am and what drives me
      </p>
      <div className="about-grid">
        <div className="about-image">
          <div className="about-image-placeholder">
            <span className="initials">RR</span>
          </div>
        </div>
        <div className="about-text">
          <h3>Hi, I'm Reshmi 👋</h3>
          <p>
            I'm a final-year B.Tech Information Technology student at Government
            College of Technology, with a deep passion for building software
            that makes a difference. My interests span both Full Stack
            Development and Artificial Intelligence — from crafting responsive
            frontends to designing intelligent RAG pipelines and working with
            LLMs.
          </p>
          <p>
            I enjoy solving complex problems with Data Structures & Algorithms,
            writing clean code in Java & Python, and continuously learning new
            tools and frameworks. I'm excited to contribute to impactful
            projects and grow as a technologist.
          </p>
          <div className="about-details">
            <div className="about-detail-item">
              <span className="label">Name</span>
              <span className="value">Reshmi R</span>
            </div>
            <div className="about-detail-item">
              <span className="label">Degree</span>
              <span className="value">B.Tech IT (Final Year)</span>
            </div>
            <div className="about-detail-item">
              <span className="label">College</span>
              <span className="value">Govt. College of Technology</span>
            </div>
            <div className="about-detail-item">
              <span className="label">Interests</span>
              <span className="value">Full Stack & AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ─── */
function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        Languages, tools, and frameworks I work with
      </p>

      <h3
        style={{
          color: "var(--text-heading)",
          marginBottom: 20,
          fontSize: "1.1rem",
          fontWeight: 600,
        }}
      >
        💪 Skills
      </h3>
      <div className="skills-grid" style={{ marginBottom: 48 }}>
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <div className="skill-icon">{s.icon}</div>
            <div className="skill-name">{s.name}</div>
            <div className="skill-category">{s.category}</div>
          </div>
        ))}
      </div>

      <h3
        style={{
          color: "var(--text-heading)",
          marginBottom: 20,
          fontSize: "1.1rem",
          fontWeight: 600,
        }}
      >
        🛠️ Technologies
      </h3>
      <div className="skills-grid">
        {technologies.map((t) => (
          <div key={t.name} className="skill-card">
            <div className="skill-icon">{t.icon}</div>
            <div className="skill-name">{t.name}</div>
            <div className="skill-category">{t.category}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Interests ─── */
function Interests() {
  return (
    <section id="interests" className="section">
      <h2 className="section-title">Areas of Interest</h2>
      <p className="section-subtitle">
        What I'm passionate about and currently exploring
      </p>
      <div className="interests-grid">
        {interests.map((item) => (
          <div key={item.title} className="interest-card">
            <div className="interest-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="interest-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="interest-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">
        Let's connect! I'm always open to discussions, collaborations, and new
        opportunities.
      </p>
      <div className="contact-content">
        <p className="contact-text">
          Whether you have a project idea, a job opportunity, or just want to
          say hi — feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:reshmi.r@example.com" className="contact-link">
            <span className="contact-link-icon">📧</span>
            reshmi.r@example.com
          </a>
          <a
            href="https://github.com/reshmir"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon">🐙</span>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/reshmir"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon">💼</span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="footer">
      <p>
        Built with <span className="heart">❤</span> by <strong>Reshmi R</strong>{" "}
        &middot; © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════ */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
