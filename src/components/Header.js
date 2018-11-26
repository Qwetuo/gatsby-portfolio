import React from 'react'
import PropTypes from 'prop-types'
import icon from "../images/min-icon.png"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
      <img src={icon} alt="icon"/>
        <div className="content">
            <div className="inner">
              <h1>Min Zhuang</h1>
              <p>An aspiring web developer passionate about using technology to improve lives.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
