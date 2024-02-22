//import React from 'react';  ??

const Resume = () => {
  const skills = ['JavaScript', 'CSS', 'HTML5', 'Git', 'React', 'Sequelize', 'MySQL', 'NoSQL', 'MongoDB', 'etc..', ];

  return (
    <div>
      <h1>My Resume</h1>
      <p>Download my resume <a href="https://docs.google.com/document/d/1R0Y2quU4vk6XWc7pyThAFijNgJodFVW8me-bUj0uBYY/edit?usp=sharing">here</a></p>

      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}


export default Resume