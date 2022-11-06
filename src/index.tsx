import 'components/init';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './globals/context';

const root = document.getElementById('root') as HTMLElement;
const app = createRoot(root);
app.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
