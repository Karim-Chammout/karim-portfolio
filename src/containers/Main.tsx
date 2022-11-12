import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../pages/about';
import Contact from '../pages/contact';
import NotFound from '../pages/notFound';
import Projects from '../pages/projects';
import Splash from '../pages/splash';
import PageTemplate from './PageTemplate';

const Blog = lazy(() => import('../pages/blog'));
const BlogDetails = lazy(() => import('../pages/blog/BlogDetails'));

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTemplate>
  );
};

export default Main;
