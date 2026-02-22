import React from "react";
import "../styles/Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaCloud,
  FaMicrochip,
} from "react-icons/fa";

import { SiSpringboot, SiHibernate, SiMysql } from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import PropTypes from "prop-types";

/* SKILL CATEGORY COMPONENT */
function SkillCategory(props) {
  const { title, skills } = props;

  return (
    <div className="skills-category">
      <h3>{title}</h3>

      <div className="skills-grid">
        {skills.map(function (skill) {
          return (
            <div className="skill-card" key={skill.name}>
              <span className="icon">{skill.icon}</span>

              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* PROPS VALIDATION (fixes warning) */
SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,

  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,

      icon: PropTypes.element.isRequired,
    }),
  ).isRequired,
};

/* MAIN SKILLS COMPONENT */
function Skills() {
  const frontend = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
  ];

  const backend = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Hibernate", icon: <SiHibernate /> },
    { name: "JDBC", icon: <FaDatabase /> },
  ];

  const database = [{ name: "MySQL", icon: <SiMysql /> }];

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <VscCode /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Cloud Computing", icon: <FaCloud /> },
    { name: "IoT", icon: <FaMicrochip /> },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">
        <SkillCategory title="Frontend" skills={frontend} />

        <SkillCategory title="Backend" skills={backend} />

        <SkillCategory title="Database" skills={database} />

        <SkillCategory title="Tools" skills={tools} />
      </div>
    </section>
  );
}

export default Skills;
