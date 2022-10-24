import { Fade } from 'react-reveal';

import Button from '../../components/button/Button';
import { projectsHeader } from '../../portfolio';
import { ThemeType } from '../../theme';
import GithubRepoCard from './githubRepoCard/GithubRepoCard';
import './Projects.css';
import ProjectsImg from './ProjectsImg';

const Projects = ({ theme }: { theme: ThemeType }) => {
  return (
    <div className="projects-main">
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1 className="projects-heading-text" style={{ color: theme.text }}>
                {projectsHeader.title}
              </h1>
              <p className="projects-header-detail-text" style={{ color: theme.secondaryText }}>
                {projectsHeader.description}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        <GithubRepoCard theme={theme} />
      </div>
      <Button
        text="More Projects"
        className="project-button"
        href="https://github.com/Karim-Chammout"
        theme={theme}
        newTab
      />
    </div>
  );
};

export default Projects;
