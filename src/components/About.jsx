import { checks } from '../data'
import heroImage from '../assets/tubis.jpg'

function About() {
  return (
    <section id="about">
      <div className="container section-box about">
        <div>
          <div className="small-title">ABOUT ME</div>

          <h2>
            Design that looks good.
            Code that works.
          </h2>

          <p className="description">
            I'm a web designer focused on creating polished, modern and
            user-friendly websites. I combine visual design with clean frontend
            development to create websites that look great on every device.
          </p>

          <div className="checks">
            {checks.map((check) => (
              <div className="check" key={check}>{check}</div>
            ))}
          </div>

          <a href="#contact" className="green-btn">→ More About Me</a>
        </div>

        <div className="about-image">
          <div className="green-background" />
          <img src={heroImage} alt="Jemson Tubis" />
          <div className="experience">
            <strong>3+</strong>
            <span>
              Years<br />
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
