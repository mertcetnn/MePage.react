import { Link } from "react-router-dom";
import "./Home.css";
import React from "react";

// pages
import Image from "../../assets/me.jpg";
import About from "../About/About";
import Contact from "../Contact/Contact";

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
  ],
};

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-left-side">
          <div className="home-img-container">
            <img src={Image} alt="home-img" />
          </div>
          <h1>
            Hi I'm a <span className="home-span">New Front-End</span> Dev.!
          </h1>
          <h1> Let me know if you have suggestions!</h1>
          <h3 className="home-h3">- Mert Cetin</h3>
        </div>
        <div className="home-right-side">
          <div className="home-links-text">
            <h1>Why dont you learn about me? </h1>
          </div>
          <div className="home-links-socials">
            <h1>Socials</h1>
          </div>
          <div className="home-links-icons">
            <a href="https://github.com/mertcetnn?tab=repositories">
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mert-cetin-newflag/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-title">
          <h1>Projects</h1>
        </div>
        <div className="projects-content">
          {data.projects.map((project) => (
            <div className="project-box">
              <div className="project-box-img">
                <a href={project.url}>
                  <img src={project.img} alt="project-img" />
                </a>
              </div>
              <div className="project-box-text">
                <h1>{project.name}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="to-projects">
          <Link to="projects">For More..</Link>
        </div>
      </div>
      <About />
      <Contact />
    </>
  );
}

export default Home;
