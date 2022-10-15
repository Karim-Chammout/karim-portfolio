import { createRoot } from 'react-dom/client';

import './App.css';
import App from './App';
import './assets/font-awesome/css/all.css';

const app = document.getElementById('root') as HTMLElement;
const root = createRoot(app);
root.render(<App />);
