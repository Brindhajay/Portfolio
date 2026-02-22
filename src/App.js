import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Home */}
      <section id="home" className="section">
        <Home />
      </section>

      {/* About */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
