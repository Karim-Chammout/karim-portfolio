import { Route, Routes } from 'react-router-dom';

import About from '../pages/about/AboutComponent';
import Blog from '../pages/blog';
import { BlogDetails } from '../pages/blog/components';
import Contact from '../pages/contact/ContactComponent';
import Projects from '../pages/projects/Projects';
import Splash from '../pages/splash/Splash';
import { ThemeType } from '../theme';
import PageTemplate from './PageTemplate';

const Main = ({ theme }: { theme: ThemeType }) => {
  return (
    <PageTemplate theme={theme}>
      <Routes>
        <Route path="/" element={<Splash theme={theme} />} />
        <Route path="/splash" element={<Splash theme={theme} />} />
        <Route path="/blog" element={<Blog theme={theme} />} />
        <Route path="/blog/:slug" element={<BlogDetails theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
      </Routes>
    </PageTemplate>
  );
};

export default Main;
