import { Fade } from 'react-reveal';

import { skills } from '../../../../portfolio';
import DataScienceImg from './DataScienceImg';
import DesignImg from './DesignImg';
import FullStackImg from './FullStackImg';
import { ContentWrapper, H3, ImgWrapper, SkillWrapper, Text } from './Skills.style';

const GetSkillSvg = ({ fileName }: { fileName: string }) => {
  if (fileName === 'DataScienceImg') return <DataScienceImg />;
  if (fileName === 'FullStackImg') return <FullStackImg />;

  return <DesignImg />;
};

const SkillSection = () => {
  return (
    <>
      {skills.data.map((skill) => (
        <SkillWrapper key={skill.title}>
          <Fade left duration={2000}>
            <ImgWrapper>
              <GetSkillSvg fileName={skill.fileName} />
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
