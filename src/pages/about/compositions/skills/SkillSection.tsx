import { Fade } from 'react-reveal';

import DesignSVG from '../../../../assets/DesignSVG';
import FrontendSVG from '../../../../assets/FrontendSVG';
import { skills } from '../../../../portfolio';
import { ContentWrapper, H3, ImgWrapper, SkillWrapper, Text } from './Skills.style';

const GetSkillSvg = ({ skillName }: { skillName: string }) => {
  switch (skillName) {
    case 'Front-end':
      return <FrontendSVG />;
    case 'Designing':
      return <DesignSVG />;
    default:
      return null;
  }
};

const SkillSection = () => {
  return (
    <>
      {skills.data.map((skill) => (
        <SkillWrapper key={skill.title}>
          <Fade left duration={2000}>
            <ImgWrapper>
              <GetSkillSvg skillName={skill.skillName} />
            </ImgWrapper>
          </Fade>
          <ContentWrapper>
            <Fade right duration={1000}>
              <H3>{skill.title}</H3>
            </Fade>
            <Fade right duration={2000}>
              {skill.skills.map((skillSentence) => (
                <Text key={skillSentence}>{skillSentence}</Text>
              ))}
            </Fade>
          </ContentWrapper>
        </SkillWrapper>
      ))}
    </>
  );
};

export default SkillSection;
