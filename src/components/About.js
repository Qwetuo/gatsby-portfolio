import React from 'react'

import profile from '../images/profile.jpg'

const countMonths = () => {
  const startDate = new Date(2018, 5, 4)
  const endDate = new Date()
  const differenceInMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())
  return differenceInMonths
}

const developmentSkills = [
  'HTML|75',
  'CSS|50',
  'Javascript|65',
  'React|55',
  'Node.JS|50',
  'REST API|55',
  'MongoDB|40',
  'Python|10',
]

const About = props => (
  <article
    id="about"
    className={`${props.article === 'about' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">About</h2>
    <span className="image profile">
      <img src={profile} alt="" />
    </span>
    <p>Hi, I am Min Zhuang!</p>
    <p>
      After 2 years of experience as a business user, working with developers to
      create performance dashboard and commission system to automate some of my
      team's processes, I fell in love with technology, and wanted to also be
      able to create products that make life easier for users.
    </p>
    <p>
      So {countMonths()} months back, I joined a{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.thoughtworks.com/jumpstart"
      >
        3 month agile web development coaching program offered by ThoughtWorks
      </a>{' '}
      and am now ready to take up the challenges to become a web developer
      myself.
    </p>
    <p>Here are a list of skills I am currently familiarising myself with:</p>
    <div className="skills">
      <div className="charts">
        <div className="chart chart--dev">
          <ul className="chart--horiz">
            {developmentSkills.map(skill => {
              const skillName = skill.split('|')[0]
              const mastery = `${skill.split('|')[1]}%`
              return (
                <li className="chart__bar" style={{ width: mastery }}>
                  <span className="chart__label">{skillName}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
    <p />
    <p>
      Click on{' '}
      <a
        href="javascript:;"
        onClick={() => {
          props.onOpenArticle('projects')
        }}
      >
        projects
      </a>{' '}
      to check out some of the websites I have created with them.
    </p>
    {props.close}
  </article>
)

export default About
