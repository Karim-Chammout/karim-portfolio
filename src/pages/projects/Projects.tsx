import { Fade } from 'react-reveal';

import { Button } from '../../components';
import { projectsData } from '../../portfolio';
import ProjectCard from './projectCard';
import { ButtonWrapper, H1, ImgWrapper, InfoWrapper, SectionWrapper, Text } from './Projects.style';
import ProjectsImg from './ProjectsImg';

const Projects = () => {
  return (
    <>
      <Fade bottom duration={2000} distance="40px">
        <SectionWrapper>
          <ImgWrapper>
            <ProjectsImg />
          </ImgWrapper>
          <InfoWrapper>
            <H1>{projectsData.title}</H1>
            <Text>{projectsData.description}</Text>
          </InfoWrapper>
        </SectionWrapper>
      </Fade>
      <ProjectCard />
      <ButtonWrapper>
        <Button text={projectsData.ctaText} href="https://github.com/Karim-Chammout" newTab />
      </ButtonWrapper>
    </>
  );
};

export default Projects;
