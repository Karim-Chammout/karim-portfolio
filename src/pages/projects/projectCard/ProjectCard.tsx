import { Fade } from 'react-reveal';

import { projectsData } from '../../../portfolio';
import { Card, CardsSection, ProjectDesc, ProjectName, Tools } from '../Projects.style';

const goToLink = (url: string) => window.open(url, '_blank');

const ProjectCard = () => {
  return (
    <Fade bottom duration={2000} distance="40px">
      <CardsSection>
        {projectsData.projectsList.map((project) => (
          <Card key={project.id} onClick={() => goToLink(project.url)}>
            <ProjectName>{project.name}</ProjectName>
            <ProjectDesc title={project.description}>{project.description}</ProjectDesc>
            <Tools>Tools: {project.tools}</Tools>
          </Card>
        ))}
      </CardsSection>
    </Fade>
  );
};

export default ProjectCard;
