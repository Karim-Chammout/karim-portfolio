import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
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
