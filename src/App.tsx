import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';
import Main from './containers/Main';
import { GlobalStyles } from './global';
import { chosenTheme } from './theme';

const client = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={chosenTheme}>
      <GlobalStyles />
      <QueryClientProvider client={client}>
        <Router>
          <Main theme={chosenTheme} />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
