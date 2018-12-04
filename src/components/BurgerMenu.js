import React, { Component } from 'react'
import Nav from './Nav'
import BurgerIcon from './BurgerIcon'

import '../assets/css/burger-menu.css'

class BurgerMenu extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <div ref={this.props.setMenuWrapperRef}>
        <BurgerIcon
          open={this.state.open}
          toggleMenu={this.toggleMenu.bind(this)}
        />
        {this.state.open ? (
          <div className="menu-div">
            <Nav
              onOpenArticle={this.props.onOpenArticle}
              toggleMenu={this.toggleMenu.bind(this)}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default BurgerMenu
