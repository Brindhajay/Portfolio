import React from "react";
import "../styles/About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        {/* LEFT SIDE PHOTO */}
        <div className="about-image">
          <img src={profile} alt="Brindha Ajay" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-content">
          <ul>
            <li>
              Aspiring Full Stack Developer with strong foundation in Java,
              Spring Boot, React, and MySQL.
            </li>

            <li>
              Completed Bachelor's degree in Electronics and Communication
              Engineering.
            </li>

            <li>
              Experienced in building full stack web applications, REST APIs,
              and backend systems.
            </li>

            <li>
              Skilled in frontend technologies including HTML, CSS, JavaScript,
              and React.
            </li>

            <li>
              Backend expertise in Java, Spring Boot, Hibernate, JDBC, and REST
              APIs.
            </li>

            <li>
              Familiar with Git, GitHub, AWS, Cloud Computing, VS Code, and IoT
              systems.
            </li>

            <li>
              Passionate about building scalable, secure, and real-world
              applications.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
