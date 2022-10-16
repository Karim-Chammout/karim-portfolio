import { Route, Switch } from 'react-router-dom';

import Contact from '../pages/contact/ContactComponent';
import Home from '../pages/home/HomeComponent';
import Projects from '../pages/projects/Projects';
import Splash from '../pages/splash/Splash';
import { settings } from '../portfolio';
import { ThemeType } from '../theme';

const Main = ({ theme }: { theme: ThemeType }) => {
  if (settings.isSplash) {
    return (
      <div>
        <Switch>
          <Route path="/" exact render={(props) => <Splash {...props} theme={theme} />} />
          <Route path="/home" render={(props) => <Home {...props} theme={theme} />} />
          <Route path="/contact" render={(props) => <Contact {...props} theme={theme} />} />
          <Route path="/splash" render={(props) => <Splash {...props} theme={theme} />} />
          <Route path="/projects" render={(props) => <Projects {...props} theme={theme} />} />
        </Switch>
      </div>
    );
  }

  return (
    <div>
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} theme={theme} />} />
        <Route path="/home" render={(props) => <Home {...props} theme={theme} />} />
        <Route path="/contact" render={(props) => <Contact {...props} theme={theme} />} />
        <Route path="/projects" render={(props) => <Projects {...props} theme={theme} />} />
      </Switch>
    </div>
  );
};

export default Main;
