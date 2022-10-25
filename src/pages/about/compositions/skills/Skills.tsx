import { Fade } from 'react-reveal';

import { H1, Wrapper } from './Skills.style';
import SkillSection from './SkillSection';

const Skills = () => {
  return (
    <Wrapper>
      <Fade bottom duration={2000} distance="30px">
        <H1>What I Do?</H1>
      </Fade>
      <SkillSection />
    </Wrapper>
  );
};
export default Skills;
