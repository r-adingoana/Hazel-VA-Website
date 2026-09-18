import hazelImage from "../images/image.png";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Image */}
          <div className="col-12 col-lg-5">
            <div className="about-image-wrapper">
              <img
                src={hazelImage}
                alt="Hazel Radingoana"
                className="about-image"
              />

              <div className="about-image-card">
                <span>LET'S</span>
                <span>WORK</span>
                <span>TOGETHER</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-12 col-lg-7">
            <div className="about-content">
              <p className="about-eyebrow">
                Organised. Reliable. Dedicated.
              </p>

              <h2 className="about-title">
                About Me
              </h2>

              <p>
                Hi, I’m <strong>Hazel</strong>, a Virtual Assistant
                passionate about helping entrepreneurs and small
                businesses stay productive and organised.
              </p>

              <p>
                I provide support with emails, calendars, social media,
                project coordination and everyday administrative tasks,
                giving you more time to focus on growing your business.
              </p>

              <p>
                As a <strong>Software Engineer</strong> and Business
                Analyst student, I combine technical skills with strong
                organisation to help create smoother and more efficient
                workflows.
              </p>

              <p>
                My goal is simple: to save you time, reduce the pressure
                of daily tasks and provide reliable support you can
                depend on.
              </p>

              {/* Highlights */}
              <div className="about-highlights">
                <div className="about-highlight">
                  <strong>100%</strong>
                  <span>Commitment</span>
                </div>

                <div className="about-highlight">
                  <strong>Reliable</strong>
                  <span>Support</span>
                </div>

                <div className="about-highlight">
                  <strong>Tailored</strong>
                  <span>To Your Needs</span>
                </div>
              </div>

              <a href="#contact" className="about-btn">
                Let's Work Together
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;