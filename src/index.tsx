import { Analytics } from '@vercel/analytics/react';
import 'components/init';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from './components';
import { ThemeProvider } from './globals/context';

const root = document.getElementById('root') as HTMLElement;
const app = createRoot(root);
app.render(
  <ThemeProvider>
    <ErrorBoundary>
      <App />
      <Analytics />
    </ErrorBoundary>
  </ThemeProvider>
);
