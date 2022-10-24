import { ThemeType } from '../../theme';
import { Greeting, Skills } from './compositions';

const About = ({ theme }: { theme: ThemeType }) => {
  return (
    <>
      <Greeting />
      <Skills theme={theme} />
    </>
  );
};

export default About;
