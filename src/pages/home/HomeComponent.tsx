import Header from '../../components/header/Header';
import Greeting from '../../containers/greeting/Greeting';
import Skills from '../../containers/skills/Skills';
import Footer from '../../components/footer/Footer';
import TopButton from '../../components/topButton/TopButton';
import { ThemeType } from '../../theme';

const Home = ({ theme }: { theme: ThemeType }) => {
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

export default Home;
