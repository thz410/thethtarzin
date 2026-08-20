'use client'

import Image from 'next/image'
import { ArrowUpRight, MapPin, Phone } from 'lucide-react'

const portraitUrl = '/profile.jpeg'

const skillGroups = [
  { label: 'Backend', items: ['Java', 'OOP', 'Spring Boot', 'REST APIs'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL'] },
]

const projects = [
  {
    number: '01',
    name: 'Route Finder',
    type: 'Desktop application',
    description: 'A GUI-based navigation application that finds efficient paths through complex city networks using Dijkstra’s algorithm.',
    tags: ['Java Swing', 'Dijkstra’s algorithm'],
    url: 'https://github.com/thz410/first-step-of-programming',
  },
  {
    number: '02',
    name: 'World Cup Database',
    type: 'Database project',
    description: 'A relational database built for the freeCodeCamp certification, with a focus on PostgreSQL schema design and data integrity.',
    tags: ['PostgreSQL', 'Relational design'],
    url: 'https://github.com/thz410/worldcup-database-project',
  },
]

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Thethtar Zin home">TZ<span>.</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#resume">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="top" className="page-shell">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">Junior full stack developer <span>—</span> Yangon, Myanmar</p>
            <h1 id="intro-title">Thethtar<br /><em>Zin</em></h1>
            <p className="hero-summary">I create web experiences by connecting clean interfaces with Java backends.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="mailto:thethtarzin326@gmail.com?subject=Project%20inquiry%20for%20Thethtar%20Zin&body=Hello%20Thethtar%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.">Get in touch <ArrowUpRight size={16} /></a>
              <a className="text-link" href="https://github.com/thz410" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="portrait-wrap">
            <Image src={portraitUrl} alt="Portrait of Thethtar Zin" className="portrait" width={1536} height={2048} sizes="(max-width: 900px) 100vw, 44vw" quality={82} priority />
            <span className="portrait-caption">Available for opportunities<br />and meaningful work</span>
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="section-label"><span>01</span><span>About</span></div>
          <div className="about-content">
            <h2 id="about-title">Curious by nature.<br /><em>Precise by practice.</em></h2>
            <div className="about-details">
              <p>As a junior developer, I enjoy turning ideas into useful software. My work sits between user-focused frontend development and structured backend systems.</p>
              <p>I’m a quick learner with hands-on experience integrating interfaces with Spring Boot REST APIs and working with relational data.</p>
            </div>
            <div className="meta-grid">
              <div><span>Based in</span><strong>Yangon, Myanmar</strong></div>
              <div><span>Education</span><strong>Higher Diploma in ICT</strong></div>
              <div><span>Date of birth</span><strong>3 February 2005</strong></div>
              <div><span>Language</span><strong>English · Intermediate</strong></div>
              <div><span>Open to</span><strong>Junior developer roles</strong></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" aria-labelledby="skills-title">
          <div className="section-label"><span>02</span><span>Toolkit</span></div>
          <div className="skills-content">
            <h2 id="skills-title">Tools I use to<br /><em>make things work.</em></h2>
            <div className="skill-groups">
              {skillGroups.map((group) => <div className="skill-group" key={group.label}><span>{group.label}</span><div>{group.items.map((item) => <p key={item}>{item}</p>)}</div></div>)}
            </div>
          </div>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-label"><span>03</span><span>Selected work</span></div>
          <div className="work-content">
            <h2 id="work-title">Projects built<br /><em>with intention.</em></h2>
            <div className="project-list">
              {projects.map((project) => <article className="project" key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-heading"><div><span className="project-type">{project.type}</span><h3>{project.name}</h3></div><ArrowUpRight className="project-arrow" size={22} /></div><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.url && <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={14} /></a>}</div></article>)}
            </div>
          </div>
        </section>

        <section className="section education-section" aria-labelledby="education-title">
          <div className="section-label"><span>04</span><span>Background</span></div>
          <div className="education-content">
            <h2 id="education-title">Learning is<br /><em>part of the work.</em></h2>
            <div className="timeline">
              <div className="timeline-item"><span>2025 — 2026</span><div><h3>Higher Diploma in Infocomm Technology</h3><p>British United College</p></div></div>
              <div className="timeline-item"><span>2025</span><div><h3>JavaSE Course</h3><p>Turing Programming Training Center</p></div></div>
              <div className="timeline-item"><span>Certification</span><div><h3>Higher Diploma in ICT</h3><p>British United College</p></div></div>
            </div>
          </div>
        </section>

        <section id="resume" className="section resume-section" aria-labelledby="resume-title">
          <div className="section-label"><span>05</span><span>One-page CV</span></div>
          <div className="resume-content">
            <div className="resume-heading">
              <div><p className="eyebrow">Thethtar Zin</p><h2 id="resume-title">Junior full stack<br /><em>developer.</em></h2></div>
              <a className="button button-dark" href="mailto:thethtarzin326@gmail.com?subject=Request%20for%20Thethtar%20Zin%27s%20CV&body=Hello%20Thethtar%2C%0A%0AI%20would%20like%20to%20request%20your%20CV.">Request CV <ArrowUpRight size={16} /></a>
            </div>
            <div className="resume-grid">
              <div><span className="section-label">Profile</span><p>Junior developer learning to build useful web applications with Java, Spring Boot, JavaScript, and relational databases.</p></div>
              <div><span className="section-label">Education</span><p><strong>Higher Diploma in ICT</strong><br />British United College · 2025–2026</p><p><strong>JavaSE Course</strong><br />Turing Programming Training Center · 2025</p></div>
              <div><span className="section-label">Projects</span><p><strong>Route Finder</strong><br />Java Swing navigation app using Dijkstra&apos;s algorithm.</p><p><strong>World Cup Database</strong><br />PostgreSQL schema and data integrity project.</p></div>
              <div><span className="section-label">Skills</span><p>Java · OOP · Spring Boot · REST APIs<br />HTML · CSS · JavaScript<br />MySQL · PostgreSQL</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">Have a project in mind?</p>
          <h2 id="contact-title">Let’s make<br /><em>something useful.</em></h2>
          <a className="contact-email" href="mailto:thethtarzin326@gmail.com">thethtarzin326@gmail.com <ArrowUpRight size={20} /></a>
          <div className="contact-meta"><a href="tel:09442477448"><Phone size={15} /> 094 424 774 48</a><a href="https://github.com/thz410" target="_blank" rel="noreferrer">github.com/thz410</a><span><MapPin size={15} /> Bahan, Yangon</span></div>
        </section>
      </div>
      <footer><span>© 2026 Thethtar Zin</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
