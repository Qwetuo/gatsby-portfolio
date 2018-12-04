import React from 'react'

const BurgerIcon = props => (
  <div
    className={props.open ? 'burger-menu open' : 'burger-menu'}
    onClick={props.toggleMenu}
  >
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
)

export default BurgerIcon
