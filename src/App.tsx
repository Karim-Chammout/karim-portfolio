import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Spinner } from './components/Spinner';
import Main from './containers/Main';
import { ThemeContext } from './globals/context';
import { globalStyles } from './globals/global';
import { darkTheme, lightTheme } from './theme';

const client = new QueryClient();

const App = () => {
  const { selectedTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
      <Global styles={globalStyles(selectedTheme)} />
      <Suspense fallback={<Spinner />}>
        <QueryClientProvider client={client}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            theme="colored"
            closeButton
            pauseOnHover
          />
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
