import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Gatsby Starter - Dimension. Design:{' '}
      <a
        target="_blank"
        without
        rel="noopener noreferrer"
        href="https://html5up.net"
      >
        HTML5 UP
      </a>
      . Built with:
      <a
        target="_blank"
        without
        rel="noopener noreferrer"
        href="https://www.gatsbyjs.org/starters/gatsby-starter-dimension/"
      >
        Gatsby.js
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
