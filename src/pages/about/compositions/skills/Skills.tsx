import { Fade } from 'react-awesome-reveal';

import { H1, Wrapper } from './Skills.style';
import SkillSection from './SkillSection';

const Skills = () => {
  return (
    <Wrapper>
      <Fade direction="down" duration={1000}>
        <H1>What I Do?</H1>
      </Fade>
      <SkillSection />
    </Wrapper>
  );
};
export default Skills;
