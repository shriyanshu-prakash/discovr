import '../styles/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        discov<span className="navbar__logo-accent">r</span>
      </div>
      <div className="navbar__tagline">full discography search</div>
    </nav>
  )
}

export default Navbar
