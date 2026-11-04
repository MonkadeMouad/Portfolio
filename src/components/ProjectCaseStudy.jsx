import { useEffect, useRef } from 'react'

export default function ProjectCaseStudy({ project, onClose }) {
  const dialogRef = useRef(null)
  const study = project.caseStudy

  function keepFocusInDialog(event) {
    if (event.key !== 'Tab') return
    const dialog = dialogRef.current
    const controls = [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')]
      .filter((element) => element.getClientRects().length > 0)
    const first = controls[0]
    const last = controls.at(-1)
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current
    const opener = document.activeElement
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.setProperty('overflow', 'hidden')
    return () => {
      dialog.close()
      document.body.style.setProperty('overflow', overflow)
      opener?.focus()
    }
  }, [])

  return (
    <dialog ref={dialogRef} className={`modal-content${study ? ' case-study' : ''}`} aria-labelledby="case-title" onKeyDown={keepFocusInDialog}
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => { if (event.target === event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect()
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose()
      } }}>
      <button className="modal-close" type="button" onClick={onClose} aria-label="Close project case study" autoFocus>✕</button>
      <div className="section-label">CASE STUDY <span>/</span> {project.number}</div>
      <h2 id="case-title">{project.title}</h2>
      <p className="modal-kicker">{project.kicker}</p>
      <p className="project-context">{project.context}</p>
      {study ? <p className="case-intro">{study.introduction}</p> : <>
        <h3>Project Overview</h3><p>{project.description}</p>
        <h3>Problem &amp; Objectives</h3><p>{project.objectives}</p>
      </>}
      <h3>{study?.roleTitle || 'My Role'}</h3>
      {study ? <ul className="case-role">{study.role.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{project.contribution}</p>}
      <h3>{study?.methodologyTitle || 'Methodology'}</h3>
      <ol className="case-method">{project.methodology.map((step) => <li key={step}>{step}</li>)}</ol>
      <h3>{study ? (study.pipelineTitle || 'Technical Pipeline') : 'Technical Architecture'}</h3>
      {study ? <figure className="codeguard-pipeline">
        <ol className="pipeline-stages">
          {study.pipeline.map((stage) => <li key={stage.title}>
            <strong>{stage.title}</strong><span>{stage.detail}</span>
            {stage.models && <ul className="pipeline-models">{stage.models.map((model) => <li key={model}>{model}</li>)}</ul>}
          </li>)}
        </ol>
        <figcaption>{study.pipelineCaption || 'Static-analysis workflow described in the PFE report (pp. 31–36). Models are compared as alternative approaches. This is an explanatory diagram, not an experimental result.'}</figcaption>
      </figure> : <p>{project.implementation}</p>}
      <div className="tags">{project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
      {project.id !== 'codeguard' && project.media?.map((media) => <figure className="case-figure" key={media.src}>
        <img src={media.src} alt={media.alt} loading="lazy" width={media.width} height={media.height} />
        <figcaption>{media.caption}</figcaption>
      </figure>)}
      {study ? <>
        <h3>{study.resultsTitle || 'Experimental Findings & Limitations'}</h3>
        <dl className="case-facts">{study.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        <p className="case-evidence-note">{study.evidenceNote || 'Corpus composition reported in the PFE, p. 36. These counts describe the experiment, not model performance.'}</p>
        <ul className="case-limitations">{study.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
      </> : <>
      <h3>Evaluation &amp; Results</h3>
      <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
      <h3>Challenges &amp; Lessons Learned</h3><p>{project.lessons}</p>
      </>}
      {project.github && <div className="case-links"><a className="btn btn-outline" href={project.github} target="_blank" rel="noreferrer">View source on GitHub <span aria-hidden="true">↗</span></a></div>}
      <button className="case-button" type="button" onClick={onClose}>Back to projects <span aria-hidden="true">↑</span></button>
    </dialog>
  )
}
