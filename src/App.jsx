import { useState } from 'react'
import { projects } from './data/projects'
import ProjectCaseStudy from './components/ProjectCaseStudy'
import profilePhoto from './assets/profile-cv.webp'
import './App.css'

const links = {
  github: 'https://github.com/MonkadeMouad',
  linkedin: 'https://www.linkedin.com/in/mouad-monkade-4588b3246/',
  email: 'mailto:monkadmouad@gmail.com',
}

const capabilities = [
  {
    number: '01',
    title: 'Software Engineering',
    note: 'Development, integration and debugging',
    skills: ['React', 'React Native', 'JavaScript', 'Node.js', 'REST API integration', 'Git'],
  },
  {
    number: '02',
    title: 'Data Science',
    note: 'Data preparation, feature extraction and experimental analysis',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data preparation', 'Feature extraction'],
  },
  {
    number: '03',
    title: 'Machine Learning',
    note: 'Prototyping, evaluation and computer vision',
    skills: ['Scikit-learn', 'PyTorch', 'CNN', 'ResNet18', 'MobileNetV2', 'ROS2'],
  },
]

function Visual({ kind }) {
  return (
    <div className={`project-art project-art--${kind}`} aria-hidden="true">
      <span className="art-corner">//</span>
      {kind === 'stack' ? (
        <div className="art-stack">
          <span>UI / MOBILE</span>
          <div className="art-route"><i /> <i /> <i /></div>
          <span>API / BACKEND</span>
        </div>
      ) : kind === 'data' ? (
        <div className="art-data">
          <span className="art-chip">AST</span>
          <span className="art-line" />
          <span className="art-chip">FEATURES</span>
          <span className="art-line" />
          <span className="art-chip">ML</span>
        </div>
      ) : (
        <div className="art-vision">
          <span className="art-viewfinder" />
          <span>ROS2 / CNN / ONNX</span>
        </div>
      )}
      <span className="art-caption">ENGINEERING / DATA / SYSTEMS</span>
    </div>
  )
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  function openProject(project) {
    setSelectedProject(project)
  }

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="Mouad Monkade, home">MOUAD<span>.</span></a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> ENGINEERING · SOFTWARE · DATA</p>
            <p className="hero-intro">Hello, I'm Mouad Monkade.</p>
            <h1 id="hero-title">Software &amp;<br /><em>Data/AI</em> Engineer<span className="title-dot">.</span></h1>
            <div className="hero-tracks" aria-label="Career specializations">
              <p>Software Engineer / Full-Stack Developer</p>
              <p>Data Scientist / Machine Learning Engineer</p>
            </div>
            <p className="hero-description">
              I work across software development and applied machine learning: contributing to
              the development and stabilization of a React Native app, building a code anomaly-detection
              prototype, and preparing visual data, training models and integrating inference
              in an autonomous-driving simulation.
            </p>
            <div className="hero-actions">
              <a className="btn btn-dark" href="#projects">Explore my projects <span>↗</span></a>
              <a className="btn btn-outline" href={links.email}>Contact me <span>↗</span></a>
            </div>
            <div className="resume-preview" aria-label="Upcoming resumes">
              <span className="resume-label">RESUMES · COMING SOON</span>
              <p>Software Engineer <span aria-hidden="true">/</span> Data Scientist</p>
            </div>
            <p className="hero-location"><span className="status-dot" /> Based in Île-de-France · Open to junior opportunities</p>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-corner portrait-corner--top" />
            <img src={profilePhoto} className="portrait" alt="Professional portrait of Mouad Monkade" />
            <div className="portrait-footer"><span>PORTFOLIO / 2026</span><span>PARIS, FRANCE</span></div>
            <div className="portrait-corner portrait-corner--bottom" />
          </div>
        </section>

        <section className="snapshot" aria-label="Selected results">
          <div className="container snapshot-grid">
            <div><strong>40</strong><span>JavaCard applets in an experimental dataset</span></div>
            <div><strong>25k</strong><span>Recorded samples described in the driving project report</span></div>
            <div><strong>2</strong><span>Engineering and AI degrees: ENSEM + Master's</span></div>
          </div>
        </section>

        <section className="section container about-section" id="about">
          <div className="section-label">01 <span>/</span> PROFILE</div>
          <div className="about-layout">
            <h2>From intelligent systems<br />to practical software.</h2>
            <div className="about-copy">
              <p>In <strong>Baccvs</strong>, I helped develop and stabilize an existing React Native app through debugging and user-journey testing. During my final-year internship, I developed <strong>CodeGuard-Card</strong>, a Python prototype combining static code analysis and machine learning for JavaCard anomaly detection.</p>
              <p>In an academic <strong>autonomous-driving team project</strong>, I contributed to visual data preparation, CNN training and ONNX integration in ROS2/Gazebo. My work connects <strong>software engineering</strong> with <strong>data science and machine learning</strong>; the case studies below detail my contributions.</p>
              <div className="education-line"><span>ENSEM</span> Engineering degree in Digital Systems <span>·</span> Université de Lorraine — Master's in AI</div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="expertise">
          <div className="container">
            <div className="section-label">02 <span>/</span> EXPERTISE</div>
            <div className="section-heading"><h2>Technical toolkit</h2><p>Software development, data preparation and model experimentation, grounded in project work.</p></div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability-card" key={capability.number}>
                  <span className="capability-number">{capability.number}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.note}</p>
                  <div className="tags">{capability.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-label">03 <span>/</span> SELECTED WORK</div>
          <div className="section-heading"><h2>Projects with substance.</h2><p>Real work, clear contributions, and results presented in context.</p></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <Visual kind={project.visual} />
                <div className="project-content">
                  <div className="project-label"><span>{project.type}</span><span>{project.number} / {String(projects.length).padStart(2, '0')}</span></div>
                  <h3>{project.title}</h3>
                  <p className="project-kicker">{project.kicker}</p>
                  <p className="project-context">{project.context}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="tags">{project.tools.slice(0, 5).map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                  <button className="case-button" type="button" aria-label={`View case study: ${project.title}`} onClick={() => openProject(project)}>View case study <span aria-hidden="true">↗</span></button>
                  {project.github && <a className="project-source" href={project.github} target="_blank" rel="noreferrer">Source on GitHub <span aria-hidden="true">↗</span></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials-section supplementary-learning">
          <div className="container credentials-layout">
            <div><div className="section-label">04 <span>/</span> ADDITIONAL LEARNING</div><h2>Continuously<br /><em>building.</em></h2></div>
            <div>
              <p>Alongside hands-on software and data projects, I have completed training covering cloud platforms for machine learning and DevOps fundamentals.</p>
              <div className="credential-list">
                <span>Cloud platforms for ML</span><strong>AWS · Azure · GCP</strong>
                <span>DevOps for Machine Learning</span><strong>Docker · APIs · CI/CD</strong>
                <span>Machine Learning with Python</span><strong>Scikit-learn · Classification · Clustering</strong>
              </div>
              <p className="credential-note">These are certification/course topics, not claims of professional production deployment experience.</p>
            </div>
          </div>
        </section>

        <section className="section container contact-section" id="contact">
          <div className="section-label">05 <span>/</span> CONTACT</div>
          <h2>Let's connect<span>.</span></h2>
          <p>Open to junior opportunities as a Software Engineer / Full-Stack Developer or a Data Scientist / Machine Learning Engineer.</p>
          <div className="contact-links">
            <a className="contact-link" href={links.email}><span>Email</span><strong>monkadmouad@gmail.com</strong><span>↗</span></a>
            <a className="contact-link" href={links.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>mouad-monkade</strong><span>↗</span></a>
            <a className="contact-link" href={links.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>MonkadeMouad</strong><span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Mouad Monkade</span><span>Software · Data · AI</span><a href="#top">Back to top ↑</a></div></footer>

      {selectedProject && <ProjectCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />}

    </div>
  )
}

export default App
