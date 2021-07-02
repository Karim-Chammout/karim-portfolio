import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

const projectsData = [
  {
    id: 1,
    name: "OxygenDevs",
    url: "https://github.com/Karim-Chammout/Oxygen-Devs",
    description: "Web Design Agency",
    tools: "HTML - CSS - BootStrap"
  },
  {
    id: 2,
    name: "Google Assistant Bootstrap",
    url: "https://github.com/Karim-Chammout/Google-Assistant-Bootstrap",
    description: "Google Assistant Design with Bootstrap",
    tools: "HTML - CSS - BootStrap"
  },
  {
    id: 3,
    name: "Portfolio Design",
    url: "https://github.com/Karim-Chammout/Temporary-Portfolio",
    description: "Designing a template for a portfolio",
    tools: "HTML - CSS - BootStrap"
  },
  {
    id: 4,
    name: "React TV Show",
    url: "https://github.com/Karim-Chammout/react-tvshow-project",
    description: "TV Shows Application To search for your favorite shows",
    tools: "HTML - CSS - BootStrap - React - React-router-dom"
  },
];

const GithubRepoCard = ({ theme }) => {
  const openRepo = (url) => {
    let win = window.open(url, "_blank")
    win.focus()
  }
  
  return (
    <div className="cards_container">
      <Fade bottom duration={2000} distance="40px">
        {projectsData.map((project) => {
          return (
            <div
              key={project.id}
              className="repo-card-div"
              style={{ backgroundColor: theme.highlight }}
              onClick={() => openRepo(project.url)}
            >
              <div className="repo-name-div">
                <p className="repo-name" style={{ color: theme.text }}>
                  {project.name}
                </p>
              </div>
              <p className="repo-description" style={{ color: theme.text }}>
                {project.description}
              </p>
              <div className="repo-details">
                <p
                  className="repo-creation-date subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Tools: {project.tools}
                </p>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default GithubRepoCard;
