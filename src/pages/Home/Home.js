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
      name: "Project Name",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Project Name",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Project Name",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Project Name",
      img: "https://picsum.photos/200/300",
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
            Hi I'm a <span className="home-span">Front-End</span> Dev.!
          </h1>
          <h3 className="home-h3">- Mert Cetin</h3>
        </div>
        <div className="home-right-side">
          <div className="home-links-text">
            <h1>
              Hey, if you interested for my web page you can go my social
              accounts
            </h1>
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
                <img src="https://picsum.photos/200/300" alt="project-img" />
              </div>
              <div className="project-box-text">
                <h1>Project Name</h1>
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
