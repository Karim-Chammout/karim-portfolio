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
      {skills.map(({ title, skillName, skillsList }) => (
        <SkillWrapper key={title}>
          <Fade left duration={2000}>
            <ImgWrapper>
              <GetSkillSvg skillName={skillName} />
            </ImgWrapper>
          </Fade>
          <ContentWrapper>
            <Fade right duration={1000}>
              <H3>{title}</H3>
            </Fade>
            <Fade right duration={2000}>
              {skillsList.map((s) => (
                <Text key={s}>{s}</Text>
              ))}
            </Fade>
          </ContentWrapper>
        </SkillWrapper>
      ))}
    </>
  );
};

export default SkillSection;
