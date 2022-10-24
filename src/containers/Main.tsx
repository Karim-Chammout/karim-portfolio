import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ThemeType } from '../theme';
import PageTemplate from './PageTemplate';

const About = React.lazy(() => import('../pages/About/About'));
const Blog = React.lazy(() => import('../pages/Blog/Blog'));
const BlogDetails = React.lazy(() => import('../pages/Blog/BlogDetails/BlogDetails'));
const Contact = React.lazy(() => import('../pages/Contact/Contact'));
const Projects = React.lazy(() => import('../pages/Projects/Projects'));
const Splash = React.lazy(() => import('../pages/Splash/Splash'));

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
