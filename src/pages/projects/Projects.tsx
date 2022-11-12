import { Fade } from 'react-reveal';

import ProjectSVG from '../../assets/ProjectSVG';
import { Button } from '../../components';
import { projectsData } from '../../portfolio';
import ProjectCard from './projectCard';
import { ButtonWrapper, H1, ImgWrapper, InfoWrapper, SectionWrapper, Text } from './Projects.style';

const { title, description, ctaText, githubLink } = projectsData;

const Projects = () => {
  return (
    <>
      <Fade bottom duration={2000} distance="40px">
        <SectionWrapper>
          <ImgWrapper>
            <ProjectSVG />
          </ImgWrapper>
          <InfoWrapper>
            <H1>{title}</H1>
            <Text>{description}</Text>
          </InfoWrapper>
        </SectionWrapper>
      </Fade>
      <ProjectCard />
      <ButtonWrapper>
        <Button text={ctaText} href={githubLink} newTab />
      </ButtonWrapper>
    </>
  );
};

export default Projects;
