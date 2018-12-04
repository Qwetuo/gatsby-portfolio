import React from 'react';

const Nav = props => {
  return (
    <nav>
      <ul>
        <li><a href onClick={() => {props.onOpenArticle('about')}}>About</a></li>
        <li><a href onClick={() => {props.onOpenArticle('projects')}}>Projects</a></li>
        <li><a href onClick={() => {props.onOpenArticle('resume')}}>Resume</a></li>
        <li><a href onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
