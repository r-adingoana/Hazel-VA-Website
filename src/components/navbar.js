function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Hazel<span>VA</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact" className="cta-link">Hire Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;