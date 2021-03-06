import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import BurgerMenu from "../components/BurgerMenu"

import '../assets/css/project-card.css'

import { graphql } from "gatsby"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setMenuWrapperRef = this.setMenuWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setMenuWrapperRef(node) {
    this.menuWrapperRef = node;
  }

  handleOpenArticle(article) {

    if (this.state.article !== "") {
      this.setState({
        article
      })
    } else {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article
      })

      setTimeout(() => {
        this.setState({
          timeout: !this.state.timeout
        })
      }, 325)

      setTimeout(() => {
        this.setState({
          articleTimeout: !this.state.articleTimeout
        })
      }, 350)
    }
  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && this.menuWrapperRef && !this.wrapperRef.contains(event.target) && !this.menuWrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
              projects={this.props.data.allMarkdownRemark.edges}
              onOpenArticle={this.handleOpenArticle}
            />
            
            {this.state.isArticleVisible ? 
            <BurgerMenu 
              onOpenArticle={this.handleOpenArticle} 
              setMenuWrapperRef={this.setMenuWrapperRef}
            />
            : <Footer timeout={this.state.timeout} />}

          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            desc
            priority
            effort_days
            website
            source_code
            tags
          }
          html
        }
      }
    }
  }
  `