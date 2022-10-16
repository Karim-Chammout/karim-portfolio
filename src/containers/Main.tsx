import { Route, Switch } from 'react-router-dom';

import About from '../pages/about/AboutComponent';
import Blog from '../pages/blog';
import { BlogDetails } from '../pages/blog/components';
import Contact from '../pages/contact/ContactComponent';
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
          <Route path="/about" render={(props) => <About {...props} theme={theme} />} />
          <Route path="/contact" render={(props) => <Contact {...props} theme={theme} />} />
          <Route path="/splash" render={(props) => <Splash {...props} theme={theme} />} />
          <Route path="/projects" render={(props) => <Projects {...props} theme={theme} />} />
          <Route exact path="/blog" render={(props) => <Blog {...props} theme={theme} />} />
          <Route path="/blog/:slug" render={(props) => <BlogDetails {...props} theme={theme} />} />
        </Switch>
      </div>
    );
  }

  return (
    <div>
      <Switch>
        <Route path="/" exact render={(props) => <About {...props} theme={theme} />} />
        <Route path="/about" render={(props) => <About {...props} theme={theme} />} />
        <Route path="/contact" render={(props) => <Contact {...props} theme={theme} />} />
        <Route path="/projects" render={(props) => <Projects {...props} theme={theme} />} />
        <Route exact path="/blog" render={(props) => <Blog {...props} theme={theme} />} />
        <Route path="/blog/:slug" render={(props) => <BlogDetails {...props} theme={theme} />} />
      </Switch>
    </div>
  );
};

export default Main;
