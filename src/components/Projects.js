import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h1 className="projects-heading">My Projects</h1>

      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <h2>Health Plus Web Application</h2>
          <p>
            Developed a healthcare web application using React with reusable
            components and responsive UI design.
          </p>
          <p className="tech">React, JavaScript, HTML, CSS</p>

          <a
            href="https://github.com/Brindhajay/Health-Plus"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h2>Product Management Microservice</h2>
          <p>
            Built backend microservice using Spring Boot with REST APIs and
            MySQL database integration.
          </p>
          <p className="tech">Java, Spring Boot, Hibernate, MySQL</p>

          <a
            href="https://github.com/Brindhajay/product-management-microservice"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h2>Spring Security Application</h2>
          <p>
            Implemented secure authentication and authorization using Spring
            Security with role-based access control.
          </p>
          <p className="tech">Java, Spring Boot, Spring Security</p>

          <a
            href="https://github.com/Brindhajay/SpringSecurity"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>

        {/* Project 4 - Hardware Project */}
        <div className="project-card">
          <h2>AI Poultry Farm Monitoring System</h2>
          <p>
            Designed and developed an IoT-based smart poultry farm monitoring
            system using ESP8266, DHT22, and MQ135 sensors. Integrated Firebase
            for real-time cloud monitoring and implemented intelligent logic to
            automatically regulate temperature and air quality.
          </p>

          <p className="tech">
            ESP8266, DHT22, MQ135, Firebase, IoT, Embedded C
          </p>

          <a
            href="https://github.com/Brindhajay/ai-poultry-farm-monitoring-system"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
