import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";
import Main from "./containers/Main";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

const App = () => {
  return (
    <ThemeProvider theme={chosenTheme}>
      <GlobalStyles />
      <Router>
        <Main theme={chosenTheme} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
