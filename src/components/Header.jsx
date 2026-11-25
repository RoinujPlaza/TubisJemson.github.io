import { navLinks } from '../data'

function Header({ activeSection }) {
  return (
    <header className="container">
      <a href="#" className="logo" aria-label="Web Designer home">
        <div className="logo-icon">✦</div>
        <div className="logo-text">
          WEB<br />
          DESIGNER
        </div>
      </a>

      <nav aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="download-btn">
        ↗ Download CV
      </a>
    </header>
  )
}

export default Header
