import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';
import Main from './containers/Main';
import { GlobalStyles } from './global';
import { chosenTheme } from './theme';

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
