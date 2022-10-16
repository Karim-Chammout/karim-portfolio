import { createRoot } from 'react-dom/client';

import App from './App';
import './App.css';
import './assets/font-awesome/css/all.css';

const app = document.getElementById('root') as HTMLElement;
const root = createRoot(app);
root.render(<App />);
