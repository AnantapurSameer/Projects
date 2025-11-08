import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "3D Heart Animation",
    desc: "A 3D Heart Animation with HTML, Css & JavaScript.",
    code: "https://github.com/AnantapurSameer/Projects/tree/main/heart"
  },
  {
    title: "3D Slider",
    desc: "A 3D Slider Used For Marketing Products.",
  
    code: "https://github.com/AnantapurSameer/Projects/tree/main/3d"
  },
  {
    title: "Portfolio",
    desc: "My personal portfolio built using React.",
    live: "https://portfolio-lcxv.onrender.com",
    code: "https://github.com/HarshavardhanReddy-Nusum/Portfolio/tree/portfolio"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <div className="project-buttons">
              {project.live && (
                <button
                  className="btn live-btn"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  Live Demo
                </button>
              )}
              {project.code && (
                <button
                  className="btn code-btn"
                  onClick={() => window.open(project.code, "_blank")}
                >
                  View Code
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
