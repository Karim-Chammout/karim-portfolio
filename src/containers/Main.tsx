import { Route, Routes } from 'react-router-dom';

import About from '../pages/About/index';
import BlogDetails from '../pages/Blog/BlogDetails/index';
import Blog from '../pages/Blog/index';
import Contact from '../pages/Contact/index';
import Projects from '../pages/Projects/index';
import Splash from '../pages/Splash/index';
import { ThemeType } from '../theme';
import PageTemplate from './PageTemplate';

const Main = ({ theme }: { theme: ThemeType }) => {
  return (
    <PageTemplate theme={theme}>
      <Routes>
        <Route path="/" element={<Splash theme={theme} />} />
        <Route path="/splash" element={<Splash theme={theme} />} />
        <Route path="/blog" element={<Blog theme={theme} />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
      </Routes>
    </PageTemplate>
  );
};

export default Main;
