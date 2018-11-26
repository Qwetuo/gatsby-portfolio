import React from 'react';

import resume from "../images/resume.pdf"

const Resume = props => (
  <article id="resume" className={`${props.article === 'resume' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Resume</h2>
    <div className="pdf-container">
      <object data={`${resume}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="100%">
        <p>File not showing? Click <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/15cA94vj3XniU9TKF6Dv4m0euIB3dJq5g/view?usp=sharing">here</a> to view it on google drive instead.</p>
      </object>
    </div>
    <p>Last updated: 26 November 2018</p>
    {props.close}
  </article>
);

export default Resume;
