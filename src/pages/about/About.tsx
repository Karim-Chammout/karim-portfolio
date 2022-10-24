import { ThemeType } from '../../theme';
import Greeting from './compositions/greeting/Greeting';
import Skills from './compositions/skills/Skills';

const About = ({ theme }: { theme: ThemeType }) => {
  return (
    <>
      <Greeting theme={theme} />
      <Skills theme={theme} />
    </>
  );
};

export default About;
