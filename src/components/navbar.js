function Navbar() {
  return (
    <nav className="navbar py-3 py-md-4">
      <div className="container-fluid px-3 px-md-5">
        <ul className="navbar-nav flex-row align-items-center justify-content-end w-100">
          <li className="nav-item">
            <a className="nav-link fw-semibold text-dark" href="#home">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold text-dark" href="#about">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold text-dark" href="#services">
              Services
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold text-dark" href="#skills">
              Skills
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;