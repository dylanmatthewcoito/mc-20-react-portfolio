import React from 'react'
import ProjectCard from '../components/ProjectCard'


function Portfolio() {
  const projects = [
    {
      title: 'Convo',
      description: '',
      imageUrl: '../convoapp.png',
      projectUrl: 'https://convo-instant-messenger-4970551bdc0f.herokuapp.com/'
    },
    {
      title: 'Travelers Event Forecaster',
      description: '',
      imageUrl: '../travelersforecaster.png',
      projectUrl: 'https://dylanmatthewcoito.github.io/travelerseventforecaster/'
    }
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center text-white mb-4">Portfolio Projects</h1>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6 d-flex" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}


export default Portfolio