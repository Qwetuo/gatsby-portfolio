import React from 'react'
import PropTypes from 'prop-types'
import icon from "../images/min-icon.png"

import Nav from "./Nav"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
      <img src={icon} alt="icon"/>
        <div className="content">
            <div className="inner">
              <h1>Min Zhuang</h1>
              <p>An aspiring web developer passionate about using technology to improve lives.</p>
            </div>
        </div>
        <Nav onOpenArticle={props.onOpenArticle} />
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
