import React from 'react'
import ProjectCard from '../components/ProjectCard'


function Portfolio() {
  const projects = [
    {
      title: 'Convo',
      imageUrl: '',
      projectUrl: ''
    },
    {
        title: '',
        imageUrl: '',
        projectUrl: ''
    },
    {

    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Portfolio Projects</h2>
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