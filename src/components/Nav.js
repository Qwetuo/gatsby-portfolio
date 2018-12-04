import React from 'react';

const Nav = props => {
  return (
    <nav>
      <ul>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('projects')}}>Projects</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('resume')}}>Resume</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
