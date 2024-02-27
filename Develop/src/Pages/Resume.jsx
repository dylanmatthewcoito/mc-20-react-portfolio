import React from 'react';
// import Resume from ''

const Resume = () => {
  //const skills = ['JavaScript', 'CSS', 'HTML5', 'Git', 'React', 'MySQL', 'MongoDB', 'etc..', ];

  return (
    <div>
      <h1 className="contact-form-section text-center rounded-lg p-4">My Resume</h1>
      <h3 className="contact-form-section rounded-pill bg-black text-center rounded-lg p-4">Download my resume <a href="https://docs.google.com/document/d/1R0Y2quU4vk6XWc7pyThAFijNgJodFVW8me-bUj0uBYY/edit?usp=sharing" style={{ backgroundColor: 'black' }}>here</a></h3>
      {/* <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul> */}

      <section className="contact-form-section rounded-lg p-4">
        <h3>Front-End Technologies:</h3>
        <ul>
          <li>HTML: HyperText Markup Language for structuring web content.</li>
          <li>CSS: Cascading Style Sheets for styling web pages.</li>
          <li>JavaScript: Programming language for adding interactivity to web pages.</li>
          <li>jQuery: JavaScript library for simplifying DOM manipulation and event handling.</li>
          <li>React: JavaScript library for building user interfaces.</li>
        </ul>
      </section>

      <section className="contact-form-section rounded-lg p-4">
        <h3>Back-End Technologies:</h3>
        <ul>
          <li>Node.js: JavaScript runtime for server-side development.</li>
          <li>Express: Web application framework for Node.js.</li>
        </ul>
      </section>

      <section className="contact-form-section rounded-lg p-4">
        <h3>Databases:</h3>
        <ul>
          <li>MySQL: Relational database management system.</li>
          <li>MongoDB: NoSQL database for storing data in JSON-like documents.</li>
        </ul>
      </section>

      <section className="contact-form-section rounded-lg p-4">
        <h3>APIs:</h3>
        <ul>
          <li>RESTful APIs: Architectural style for designing networked applications.</li>
          <li>GraphQL: Query language for APIs and a runtime for executing those queries.</li>
        </ul>
      </section>

      <section className="contact-form-section rounded-lg p-4">
        <h3>Version Control:</h3>
        <ul>
          <li>Git: Distributed version control system.</li>
          <li>GitHub: Web-based Git repository hosting service.</li>
        </ul>
      </section>

      <section className="contact-form-section rounded-lg p-4">
        <h3>Other Tools and Concepts:</h3>
        <ul>
          <li>AJAX: Asynchronous JavaScript and XML for updating parts of a web page without reloading the whole page.</li>
          <li>JSON: Lightweight data-interchange format.</li>
          <li>WebSockets: Communication protocol that provides full-duplex communication channels over a single TCP connection.</li>
          <li>Responsive Design: Design approach that ensures web applications render well on a variety of devices and window or screen sizes.</li>
          <li>Security: Concepts like Authentication and Authorization to secure web applications.</li>
          <li>Deployment: Platforms like Heroku and Netlify for deploying and hosting web applications.</li>
        </ul>
      </section>

    </div>
  )
}


export default Resume