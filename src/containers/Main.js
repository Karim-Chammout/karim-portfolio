import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

const Main = ({ theme }) => {
  if (settings.isSplash) {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Splash {...props} theme={theme} />}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={theme} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={theme} />}
          />
          <Route
            path="/splash"
            render={(props) => <Splash {...props} theme={theme} />}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={theme} />}
          />
        </Switch>
      </div>
    );
  } else {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={theme} />}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={theme} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={theme} />}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={theme} />}
          />
        </Switch>
      </div>
    );
  }
};

export default Main;
