import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageTemplate from './PageTemplate';

const Splash = lazy(() => import('../pages/splash'));
const Blog = lazy(() => import('../pages/blog'));
const BlogDetails = lazy(() => import('../pages/blog/BlogDetails'));
// const Projects = lazy(() => import('../pages/projects'));
const About = lazy(() => import('../pages/about'));
const Contact = lazy(() => import('../pages/contact'));
const NotFound = lazy(() => import('../pages/notFound'));

const Main = () => {
  return (
    <PageTemplate>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        {/* Hide the "projects" page temporarily */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTemplate>
  );
};

export default Main;
