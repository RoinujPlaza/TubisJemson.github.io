import { socialLinks } from '../data'
import heroImage from '../assets/tubis.jpg'

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <div className="small-title">WE CREATE WEBSITES FOR YOU</div>

        <h1>
          WEB<br />
          DESIGNER
        </h1>

        <p>
          I create modern, responsive and engaging websites that help businesses
          and individuals build a strong presence online.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="green-btn">→ Contact Me</a>
          <a href="#projects" className="outline-btn">View Portfolio</a>
        </div>
      </div>

      <img src={heroImage} alt="Jemson Tubis" className="hero-image" />

      <div className="rating">
        <div>
          <strong>4.9</strong>
          <small>Client Satisfaction</small>
        </div>
        <div className="avatars">
          <div className="avatar" />
          <div className="avatar" />
          <div className="avatar" />
          <div className="avatar" />
        </div>
      </div>

      <div className="social">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} aria-label={`Social link ${link.label}`}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Hero
