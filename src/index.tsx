import { createRoot } from 'react-dom/client';

import App from './App';

const app = document.getElementById('root') as HTMLElement;
const root = createRoot(app);
root.render(<App />);
