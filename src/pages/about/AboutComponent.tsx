import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import TopButton from '../../components/topButton/TopButton';
import Greeting from '../../containers/greeting/Greeting';
import Skills from '../../containers/skills/Skills';
import { ThemeType } from '../../theme';

const About = ({ theme }: { theme: ThemeType }) => {
  return (
    <div>
      <Header theme={theme} />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default About;
