import { inject } from '@vercel/analytics';
import 'components/init';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from './components';
import { ThemeProvider } from './globals/context';

inject();

const root = document.getElementById('root') as HTMLElement;
const app = createRoot(root);
app.render(
  <ThemeProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ThemeProvider>
);
