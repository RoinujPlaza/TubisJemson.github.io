import { services } from '../data'

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="small-title">WHAT I DO</div>

        <h2>
          Services built around
          your digital goals.
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service" key={service.number}>
              <div className="service-icon">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
