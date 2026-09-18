import Navbar from "./navbar";
import hazelImage from "../images/IMG_7530.JPG";

function Header() {
  return (
    <header id="home" className="hero">
      <Navbar />

      <div className="container">
        <div className="row align-items-center hero-main">

          {/* TEXT */}
          <div className="col-12 col-lg-6 order-2 order-lg-1 hero-text">
            <p className="hero-eyebrow">
              Virtual Assistant & Admin Support
            </p>

            <h1 className="hero-title">
              Hi, I'm
              <span> Hazel Radingoana</span>
            </h1>

            <h2 className="hero-subtitle">
              Your Trusted Virtual Assistant
            </h2>

            <p className="hero-description">
              I help busy professionals and entrepreneurs save time,
              stay organised, and focus on what matters most. From admin
              support to content assistance, I provide reliable support
              tailored to your needs.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="hero-primary-btn">
                Hire Me
              </a>

              <a href="#services" className="hero-secondary-btn">
                View My Services
              </a>
            </div>

            <div className="hero-benefits">
              <div className="hero-benefit">
                <i className="bi bi-clock"></i>
                <span>Reliable Support</span>
              </div>

              <div className="hero-benefit">
                <i className="bi bi-calendar-check"></i>
                <span>Organised Systems</span>
              </div>

              <div className="hero-benefit">
                <i className="bi bi-people"></i>
                <span>Client-Focused</span>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="hero-image-wrapper">
              <img
                src={hazelImage}
                alt="Hazel Radingoana Virtual Assistant"
                className="hero-image"
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;