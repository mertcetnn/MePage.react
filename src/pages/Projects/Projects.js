import "./Projects.css";
import React from "react";
const data = {
  projects: [
    {
      name: "FoodPrint",
      img: "https://i.ibb.co/Q8rZ6Wc/Foodprint.jpg",
      url: "https://github.com/mertcetnn/Food-Print",
    },
    {
      name: "SolarCod",
      img: "https://i.ibb.co/CMnThNX/Screenshot-at-Jun-13-21-12-54.png",
      url: "https://github.com/mertcetnn/develop-SolarCOD",
    },
    {
      name: "Weather Dashboard",
      img: "https://i.ibb.co/StVcKky/demo.jpg",
      url: "https://github.com/mertcetnn/Weather-Dashboard",
    },
    {
      name: "My Portfolio",
      img: "https://i.ibb.co/Y8TCtzT/Image-11-10-22-at-2-36-PM.jpg",
      url: "https://github.com/mertcetnn/My-Portfolios",
    },
    {
      name: "Employe TRacker",
      img: "https://i.ibb.co/GvVsV3r/Image-11-10-22-at-2-40-PM.jpg",
      url: "https://github.com/mertcetnn/Employee-Tracker",
    },
  ],
};

function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="projects-title">
          <h1>Projects</h1>
        </div>
        <div className="projects-content">
          {data.projects.map((projects) => (
            <div className="project-box">
              <div className="project-box-img">
                <a href={projects.url}>
                  <img src={projects.img} alt="project-img" />
                </a>
              </div>
              <div className="project-box-text">
                <h1>{projects.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
