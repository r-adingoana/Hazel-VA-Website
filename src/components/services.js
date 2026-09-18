function Services() {
  const services = [
    {
      icon: "📩",
      title: "Email & Calendar Management",
      description:
        "Organizing your inbox, scheduling meetings, and keeping your calendar on track so you never miss important deadlines.",
    },
    {
      icon: "🔍",
      title: "Research & Analysis",
      description:
        "Conducting market, competitor, and industry research to provide actionable insights and support informed business decisions.",
    },
    {
      icon: "💻",
      title: "Social Media Management",
      description:
        "Capable of handling posting, content scheduling, and engagement on platforms such as Facebook, Instagram, and LinkedIn.",
    },
    {
      icon: "📊",
      title: "Reports & Spreadsheets",
      description:
        "Creating detailed reports, managing spreadsheets, and analyzing data to help you monitor business performance.",
    },
    {
      icon: "📞",
      title: "Customer Support",
      description:
        "Managing client communication, responding to inquiries, and providing professional support to enhance customer satisfaction.",
    },
    {
      icon: "💼",
      title: "Business Administration",
      description:
        "From drafting proposals and formatting presentations to coordinating with suppliers, I provide reliable admin support that keeps your business operations professional and efficient.",
    },
  ];

  return (
    <section id="services" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="text-success mb-5">Services</h2>
        <div className="row">
          {services.map((s, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-2 service-card">
                <div className="card-body">
                  <div
                    className="mb-3 d-inline-flex justify-content-center align-items-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#eaf7f0",
                      fontSize: "30px",
                    }}
                    aria-label={s.title}
                  >
                    {s.icon}
                  </div>
                  <h5 className="card-title mt-3 mb-2">{s.title}</h5>
                  <p className="card-text text-muted">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .service-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
}

function Skills() {
  const skills = [
    {
      icon: "📝",
      title: "Office Tools",
      description:
        "Proficient in Microsoft Office Suite (Word, Excel, PowerPoint) and Google Workspace (Docs, Sheets, Drive, Calendar) for seamless document, data, and scheduling management.",
    },
    {
      icon: "💬",
      title: "Communication Tools",
      description:
        "Skilled in Slack, Microsoft Teams, Zoom,  and Google Meets to ensure smooth collaboration and professional client communication.",
    },

    {
      icon: "⚡",
      title: "Tech-Savvy",
      description:
        "Comfortable learning and adopting new digital tools, ensuring adaptability to different client workflows and systems.",
    },
  ];

  return (
    <section id="skills" className="py-5 text-center bg-white">
      <div className="container">
        <h2 className="text-success mb-5">Technical & Digital Skills</h2>
        <div className="row">
          {skills.map((s, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-2 skill-card">
                <div className="card-body">
                  <div
                    className="mb-3 d-inline-flex justify-content-center align-items-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#f0f9f4",
                      fontSize: "28px",
                    }}
                    aria-label={s.title}
                  >
                    {s.icon}
                  </div>
                  <h5 className="card-title mt-3 mb-2">{s.title}</h5>
                  <p className="card-text text-muted">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skill-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
}

// ✅ export them together
export { Services, Skills };
 