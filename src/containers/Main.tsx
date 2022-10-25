import { Route, Routes } from 'react-router-dom';

import About from '../pages/about';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog/BlogDetails';
import Contact from '../pages/contact';
import Projects from '../pages/projects';
import Splash from '../pages/splash';
import PageTemplate from './PageTemplate';

const Main = () => {
  return (
    <PageTemplate>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageTemplate>
  );
};

export default Main;
