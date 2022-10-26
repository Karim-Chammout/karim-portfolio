import { Spinner } from 'components/Spinner';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Main from './containers/Main';
import { GlobalStyles } from './global';
import { chosenTheme } from './theme';

const client = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={chosenTheme}>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <QueryClientProvider client={client}>
          <Router>
            <Main />
          </Router>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
