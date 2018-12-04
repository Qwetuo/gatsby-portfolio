import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      indexOpened: undefined
    }
  }

  toggleLearnMore(index) {
    const indexOpenOrClose =
      index === this.state.indexOpened ? undefined : index
    this.setState({
      indexOpened: indexOpenOrClose
    })
  }

  render() {
    const projects = this.props.projects.sort(
      (a, b) => b.node.frontmatter.priority - a.node.frontmatter.priority
    )
    return (
      <article
        id="projects"
        className={`${this.props.article === 'projects' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Projects</h2>
        {projects.map((project, index) => {
          const thisIndexIsOpened =
            this.state.indexOpened === index ? true : false
          return (
            <div onClick={() => this.toggleLearnMore(index)}>
              <ProjectCard
                key={index}
                frontmatter={project.node.frontmatter}
                html={project.node.html}
                thisIndexIsOpened={thisIndexIsOpened}
              />
            </div>
          )
        })}
        {this.props.close}
      </article>
    )
  }
}

export default Projects
