import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Health Plus Web Application",
      description:
        "Developed a responsive healthcare web application using React. Implemented reusable components, modern UI design, and smooth navigation to improve user experience.",
      tech: "React, JavaScript, HTML, CSS",
      github: "https://github.com/Brindhajay/Health-Plus",
      live: null,
    },

    {
      title: "Product Management Microservice",
      description:
        "Built a backend microservice using Spring Boot with RESTful APIs for product management. Integrated MySQL database and implemented scalable architecture.",
      tech: "Java, Spring Boot, Hibernate, MySQL, REST API",
      github: "https://github.com/Brindhajay/product-management-microservice",
      live: null,
    },

    {
      title: "Spring Security Application",
      description:
        "Implemented secure authentication and authorization using Spring Security. Designed role-based access control system with protected routes and secure login.",
      tech: "Java, Spring Boot, Spring Security",
      github: "https://github.com/Brindhajay/SpringSecurity",
      live: null,
    },

    {
      title: "AI Poultry Farm Monitoring System",
      description:
        "Designed an AI-based IoT system using ESP8266, DHT22, and MQ135 sensors to monitor poultry farm conditions. Integrated Firebase cloud for real-time monitoring and implemented intelligent control logic for automatic temperature and air quality regulation.",
      tech: "ESP8266, DHT22, MQ135, Firebase, IoT, Embedded C",
      github: "https://github.com/Brindhajay/ai-poultry-farm-monitoring-system",
      live: null,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1 className="projects-heading">Projects</h1>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h2>{project.title}</h2>

            <p className="project-description">{project.description}</p>

            <p className="tech">
              <strong>Tech Stack:</strong> {project.tech}
            </p>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                <button className="github-btn">GitHub</button>
              </a>

              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <button className="live-btn">Live Demo</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
