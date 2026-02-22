import "../styles/Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>

      <p className="contact-text">
        Let's connect and build something amazing together.
      </p>

      <div className="contact-buttons">
        <a href="mailto:your-email@gmail.com" className="contact-btn">
          <FaEnvelope /> Email
        </a>

        <a
          href="https://github.com/Brindhajay"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://linkedin.com/in/YOUR-LINKEDIN"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a href="/resume.pdf" className="contact-btn">
          <FaFileDownload /> Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
