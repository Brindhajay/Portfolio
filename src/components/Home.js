import React from "react";
import "../styles/Home.css";
import myphoto from "../assets/myphoto.jpg";

function Home() {
  return (
    <section className="home-section" id="home">
      {/* LEFT SIDE */}
      <div className="home-content">
        <p className="home-intro">Hi, I'm</p>

        <h1 className="home-name">Brindha Ajay</h1>

        <h2 className="home-role">Aspiring Full Stack Developer</h2>

        <p className="home-description">
          I enjoy building web applications and learning how software works
          behind the scenes. Currently focusing on Java, Spring Boot, React, and
          backend development.
        </p>

        {/* TECH TAGS */}
        <div className="home-tags">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
          <span>MySQL</span>
          <span>IoT Enthusiast</span>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="home-image">
        <img src={myphoto} alt="Brindha Ajay" />
      </div>
    </section>
  );
}

export default Home;
