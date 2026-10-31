import { useCallback, useEffect, useRef, useState } from 'react'
import profilePhoto from './assets/profile-cv.png'
import './App.css'

const links = {
  github: 'https://github.com/MonkadeMouad',
  linkedin: 'https://www.linkedin.com/in/mouad-monkade-4588b3246/',
  email: 'mailto:monkadmouad@gmail.com',
}

const capabilities = [
  {
    number: '01',
    title: 'Software & Full-Stack',
    note: 'Development, integration and debugging',
    skills: ['React', 'React Native', 'JavaScript', 'Node.js', 'REST API integration', 'Git'],
  },
  {
    number: '02',
    title: 'Data Engineering & Analytics',
    note: 'Data pipelines and experimental workflows',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data preparation', 'Feature extraction'],
  },
  {
    number: '03',
    title: 'Machine Learning & AI',
    note: 'Prototyping, evaluation and computer vision',
    skills: ['Scikit-learn', 'PyTorch', 'CNN', 'ResNet18', 'MobileNetV2', 'ROS2'],
  },
  {
    number: '04',
    title: 'Cloud & MLOps Foundations',
    note: 'Exposure through courses and certifications',
    skills: ['AWS SageMaker', 'Azure ML', 'Vertex AI', 'BigQuery ML', 'Docker concepts', 'CI/CD concepts'],
  },
]

const projects = [
  {
    id: 'baccvs',
    number: '01',
    type: 'SOFTWARE ENGINEERING',
    title: 'Baccvs',
    kicker: 'React Native app integration',
    description:
      'Contributed to an existing mobile application by configuring its Android environment, debugging dependencies and testing user journeys. Investigated API configuration and frontend/backend connectivity.',
    tools: ['React Native', 'JavaScript', 'Android', 'Node.js', 'Git'],
    highlights: [
      'Configured and ran the application on an Android emulator.',
      'Resolved local build, dependencies and runtime issues.',
      'Tested registration, navigation and location-related flows.',
      'Investigated API environment variables and backend connectivity; end-to-end integration still requires validation.',
    ],
    contribution: 'Development environment, troubleshooting, integration testing on an existing codebase.',
    visual: 'stack',
  },
  {
    id: 'codeguard',
    number: '02',
    type: 'DATA / MACHINE LEARNING',
    title: 'CodeGuard-Card',
    kicker: 'Anomaly detection for JavaCard',
    description:
      'Designed a primarily independent experimental prototype for static analysis and anomaly detection in JavaCard applets, from feature extraction to model comparison.',
    tools: ['Python', 'Java', 'Scikit-learn', 'AST', 'Isolation Forest', 'DBSCAN'],
    highlights: [
      'Prepared a test corpus of 40 JavaCard applets, including 10 with injected anomalies.',
      'Extracted static code features for machine-learning analysis.',
      'Compared DBSCAN, One-Class SVM and Isolation Forest.',
      'Observed an F1-score of approximately 0.82 for Isolation Forest in experimental testing, not a production deployment.',
    ],
    contribution: 'Mainly independent development of an evaluated research prototype during a final-year internship.',
    visual: 'data',
  },
  {
    id: 'audibot',
    number: '03',
    type: 'COMPUTER VISION',
    title: 'Audibot',
    kicker: 'Predictive driving with ROS2',
    description:
      'Worked on a ROS2/Gazebo autonomous-driving prototype, synchronizing multi-camera observations and evaluating convolutional neural networks to predict steering angles.',
    tools: ['ROS2', 'Python', 'PyTorch', 'ResNet18', 'MobileNetV2', 'ONNX'],
    highlights: [
      'Contributed to collecting and synchronizing 25,000 multi-sensor observations.',
      'Adapted and trained ResNet18 and MobileNetV2 using three cameras.',
      'Compared model performance; MobileNetV2 achieved an MAE of 0.316 in experiments.',
      'Integrated ONNX inference within the driving workflow.',
    ],
    contribution: 'Academic team project: data collection, deep-learning experimentation and software integration.',
    visual: 'vision',
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
  const closeButtonRef = useRef(null)
  const openerRef = useRef(null)

  function openProject(project, event) {
    openerRef.current = event.currentTarget
    setSelectedProject(project)
  }

  const closeProject = useCallback(() => {
    setSelectedProject(null)
    requestAnimationFrame(() => openerRef.current?.focus())
  }, [])

  useEffect(() => {
    if (!selectedProject) return undefined
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeProject()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [selectedProject, closeProject])

  return (
    <div className="site-shell" id="top">
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

      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> ENGINEERING · SOFTWARE · DATA</p>
            <p className="hero-intro">Hello, I'm Mouad Monkade.</p>
            <h1 id="hero-title">Software &amp;<br /><em>Data/AI</em> Engineer<span className="title-dot">.</span></h1>
            <p className="hero-tracks">Full-Stack Development <span>·</span> Data Engineering <span>·</span> Cloud &amp; Machine Learning</p>
            <p className="hero-description">
              ENSEM engineering graduate and Master's alumnus in Artificial Intelligence.
              I develop Python-based data and ML prototypes, contribute to software integration,
              and am expanding my expertise in full-stack development and cloud technologies.
            </p>
            <div className="hero-actions">
              <a className="btn btn-dark" href="#projects">Explore my projects <span>↗</span></a>
              <a className="btn btn-outline" href={links.email}>Contact me <span>↗</span></a>
            </div>
            <p className="hero-location"><span className="status-dot" /> Based in Île-de-France · Open to junior opportunities</p>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-corner portrait-corner--top" />
            <img src={profilePhoto} className="portrait" alt="Portrait professionnel de Mouad Monkade" />
            <div className="portrait-footer"><span>PORTFOLIO / 2026</span><span>PARIS, FRANCE</span></div>
            <div className="portrait-corner portrait-corner--bottom" />
          </div>
        </section>

        <section className="snapshot" aria-label="Selected results">
          <div className="container snapshot-grid">
            <div><strong>40</strong><span>JavaCard applets in an experimental dataset</span></div>
            <div><strong>25k</strong><span>Multi-sensor observations contributed to ROS2 work</span></div>
            <div><strong>2</strong><span>Engineering and AI degrees: ENSEM + Master's</span></div>
          </div>
        </section>

        <section className="section container about-section" id="about">
          <div className="section-label">01 <span>/</span> PROFILE</div>
          <div className="about-layout">
            <h2>From intelligent systems<br />to practical software.</h2>
            <div className="about-copy">
              <p>My foundation is in machine learning, digital systems and programming. At Digital House Group, I built and evaluated a Python anomaly-detection prototype. At university, I worked on computer vision and ROS2-based autonomous-driving experiments.</p>
              <p>I am now broadening this foundation toward <strong>Python/backend, full-stack integration, data workflows and cloud-enabled applications</strong>. My cloud exposure comes from coursework and certifications; I am building practical deployment experience.</p>
              <div className="education-line"><span>ENSEM</span> Engineering degree in Digital Systems <span>·</span> Université de Lorraine — Master's in AI</div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="expertise">
          <div className="container">
            <div className="section-label">02 <span>/</span> EXPERTISE</div>
            <div className="section-heading"><h2>Technical toolkit</h2><p>A pragmatic combination of hands-on work and developing specializations.</p></div>
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
                  <div className="project-label"><span>{project.type}</span><span>{project.number} / 03</span></div>
                  <h3>{project.title}</h3>
                  <p className="project-kicker">{project.kicker}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="tags">{project.tools.slice(0, 5).map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                  <button className="case-button" type="button" onClick={(event) => openProject(project, event)}>View case study <span>↗</span></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials-section">
          <div className="container credentials-layout">
            <div><div className="section-label">04 <span>/</span> CLOUD & LEARNING</div><h2>Continuously<br /><em>building.</em></h2></div>
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
          <p>Open to junior roles in software development, Python/backend, data engineering and applied AI, with opportunities to grow in cloud.</p>
          <div className="contact-links">
            <a className="contact-link" href={links.email}><span>Email</span><strong>monkadmouad@gmail.com</strong><span>↗</span></a>
            <a className="contact-link" href={links.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>mouad-monkade</strong><span>↗</span></a>
            <a className="contact-link" href={links.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>MonkadeMouad</strong><span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Mouad Monkade</span><span>Software · Data · AI</span><a href="#top">Back to top ↑</a></div></footer>

      {selectedProject && (
        <div className="modal-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) closeProject() }}>
          <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="case-title">
            <button className="modal-close" type="button" ref={closeButtonRef} onClick={closeProject} aria-label="Close project case study">✕</button>
            <div className="section-label">CASE STUDY <span>/</span> {selectedProject.number}</div>
            <h2 id="case-title">{selectedProject.title}</h2>
            <p className="modal-kicker">{selectedProject.kicker}</p>
            <p>{selectedProject.description}</p>
            <h3>My contribution</h3><p>{selectedProject.contribution}</p>
            <h3>Key contributions &amp; results</h3>
            <ul>{selectedProject.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            <h3>Technologies</h3><div className="tags">{selectedProject.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
