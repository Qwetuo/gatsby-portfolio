import React from 'react'

import '../assets/css/project-card.css'

const ProjectCard = props => (
  <div className="card">
    <div className="card-header">
      <h3>{props.frontmatter.title}</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.frontmatter.source_code}
        className="icon fa-github fa-lg"
      >
        <span className="label">GitHub</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.frontmatter.website}
        className="icon fa-external-link fa-lg"
      >
        <span className="label">Link</span>
      </a>
    </div>
    <hr />
    <div className="clear description">
      <p>{props.frontmatter.desc}</p>
      <p>
        Built in {props.frontmatter.effort_days}+ days with{' '}
        {props.frontmatter.tags.join(' | ')}
      </p>
    </div>
  </div>
)

export default ProjectCard
