import { Fade } from 'react-reveal';

import { projectsData } from '../../../portfolio';
import { Card, CardsSection, Content, ProjectDesc, ProjectName, Tools } from '../Projects.style';

const goToLink = (url: string) => window.open(url, '_blank');

const ProjectCard = () => {
  return (
    <Fade bottom duration={2000} distance="40px">
      <CardsSection>
        {projectsData.projectsList.map(({ id, url, imgUrl, name, tools, description }) => (
          <Card key={id} onClick={() => goToLink(url)} imgurl={imgUrl}>
            <Content className="content_hover">
              <ProjectName>{name}</ProjectName>
              <Tools className="tools_hover">Tools: {tools}</Tools>
              <ProjectDesc className="desc_hover" title={description}>
                {description}
              </ProjectDesc>
            </Content>
          </Card>
        ))}
      </CardsSection>
    </Fade>
  );
};

export default ProjectCard;
