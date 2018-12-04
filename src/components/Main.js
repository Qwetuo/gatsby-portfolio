import React from 'react'
import PropTypes from 'prop-types'

import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <About article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}  onOpenArticle={this.props.onOpenArticle}/>

        <Projects article={this.props.article} articleTimeout={this.props.articleTimeout} close={close} projects={this.props.projects} onOpenArticle={this.props.onOpenArticle}/>

        <Resume article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}/>
        
        <Contact article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}/>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main