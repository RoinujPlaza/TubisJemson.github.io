import { projects } from '../data'

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="small-title">MY PORTFOLIO</div>

        <h2>Selected projects.</h2>

        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-preview">{project.number}</div>
              <div className="project-info">
                <small>{project.category}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
