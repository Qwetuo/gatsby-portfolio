import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = props => {
  const projects = props.projects.sort(
    (a, b) => b.node.frontmatter.priority - a.node.frontmatter.priority
  )
  return (
    <article
      id="projects"
      className={`${props.article === 'projects' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Projects</h2>
      {projects.map(project => (
        <ProjectCard frontmatter={project.node.frontmatter} />
      ))}
      {props.close}
    </article>
  )
}

export default Projects
