import React from 'react';

import "../assets/css/projects.css";

const Projects = props => {
  const projects = props.projects.sort((a,b) => b.node.frontmatter.priority - a.node.frontmatter.priority)
  return (
    <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
      <h2 className="major">Projects</h2>
      {projects.map(project => {
        const { title, desc, priority, effort_days, website, source_code, tags} = project.node.frontmatter
        return (
          <div className="card">
            <div className="card-header">
            <h3>{title}</h3>
            <a target="_blank" rel="noopener noreferrer" href={source_code} className="icon fa-github fa-lg"><span className="label">GitHub</span></a>
            <a target="_blank" rel="noopener noreferrer" href={website} className="icon fa-external-link fa-lg"><span className="label">Link</span></a>
            </div>
            <hr />
            <div className="clear description">
              <p>{desc}</p>
              <p>Built in {effort_days}+ days with {tags.join(" | ")}</p>
            </div>
          </div>
        )
      })}
      {props.close}
    </article>
  );
}

export default Projects;
