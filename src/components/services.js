function Services() {
  const services = [
    {
      icon: "bi-envelope",
      title: "Email & Calendar Management",
      description:
        "Organising your inbox, scheduling meetings, and keeping your calendar on track so you never miss important deadlines.",
    },
    {
      icon: "bi-search",
      title: "Research & Analysis",
      description:
        "Conducting market, competitor, and industry research to provide useful insights and support informed business decisions.",
    },
    {
      icon: "bi-phone",
      title: "Social Media Management",
      description:
        "Managing posting, content scheduling, and engagement across platforms such as Facebook, Instagram, and LinkedIn.",
    },
    {
      icon: "bi-bar-chart",
      title: "Reports & Spreadsheets",
      description:
        "Creating reports, managing spreadsheets, and organising data to help you monitor business performance.",
    },
    {
      icon: "bi-headset",
      title: "Customer Support",
      description:
        "Managing client communication, responding to enquiries, and providing professional support to your customers.",
    },
    {
      icon: "bi-briefcase",
      title: "Business Administration",
      description:
        "From drafting proposals and formatting presentations to coordinating with suppliers, I provide reliable administrative support.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">

        <div className="services-heading text-center">
          <p className="section-eyebrow">
            Flexible support for your business needs
          </p>

          <h2 className="script-title">
            My Services
          </h2>

          <p className="section-intro mx-auto">
            Practical and reliable support designed to give you more
            time to focus on your business.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="service-card border-primary h-100">

                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


function Skills() {
  const skills = [
    {
      icon: "bi-file-earmark-text",
      title: "Office Tools",
      description:
        "Microsoft Office and Google Workspace for professional document creation, spreadsheets, presentations, file management, and scheduling.",
    },
    {
      icon: "bi-chat-dots",
      title: "Communication Tools",
      description:
        "Slack, Microsoft Teams, Zoom, and Google Meet for smooth collaboration and professional client communication.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Tech-Savvy",
      description:
        "Comfortable learning and adopting new digital tools, allowing me to adapt quickly to different client workflows and systems.",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <div className="text-center">
          <p className="section-eyebrow">
            Tools & Capabilities
          </p>

          <h2 className="script-title">
            My Skills
          </h2>

          <p className="section-intro mx-auto">
            Digital tools and practical skills that help me provide
            organised and efficient support.
          </p>
        </div>

        <div className="row g-4 justify-content-center mt-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="skill-card border-primary h-100">

                <div className="skill-icon">
                  <i className={`bi ${skill.icon}`}></i>
                </div>

                <h3>{skill.title}</h3>

                <p>{skill.description}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


export { Services, Skills };