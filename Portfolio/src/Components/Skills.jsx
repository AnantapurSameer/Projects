import React from "react";
import "./Skills.css";
import { FaCode, FaServer, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiC,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: <SiHtml5 />, title: "HTML", desc: "Structure of web pages" },
        { icon: <SiCss3 />, title: "CSS", desc: "Styling and layout design" },
        { icon: <SiJavascript />, title: "JavaScript", desc: "Interactive and dynamic web functionality" },
        
      ]
    },
    
    {
      title: "Programming Languages",
      skills: [
        { icon: <FaJava />, title: "Python", desc: "Interpreted object-oriented programming" },
        
      ]
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql />, title: "MySQL", desc: "Relational database management system" },
        
      ]
    },
    {
      title: "Version Control",
      skills: [
        
        { icon: <SiGithub />, title: "GitHub", desc: "Collaborative code hosting platform" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-title">
        <h1>My Skills</h1>
      </div>
      {skillCategories.map((category, idx) => (
        <div key={idx} className="skill-category">
          <h3 className="category-title">{category.title}</h3>
          <div className="skills-container">
            {category.skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="icon">{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
