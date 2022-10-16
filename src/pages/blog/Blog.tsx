import { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';

import sanityClient from '../../client';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import TopButton from '../../components/topButton/TopButton';
import { ThemeType } from '../../theme';
import './Blog.css';
import BlogImage from './BLogImage';
import { BlogCard } from './components';

export interface Post {
  _id: string;
  title?: string;
  author?: {
    name: string;
    image: string;
  };
  body?: object;
  slug: {
    current: string;
  },
  description: string;
}

const Blog = ({ theme }: { theme: ThemeType }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const postQuery = `
      *[_type == 'post']{
        _id,
        title,
        author-> {
          name,
          image
        },
        slug,
        description,
        category-> {
          title,
          description
        },
        body
      }
    `;
    sanityClient
      .fetch(postQuery)
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="blog-main">
      <Header theme={theme} />
      <header className="blog-header-section">
        <Fade bottom duration={2000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-img-div">
              <BlogImage theme={theme} />
            </div>
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                This is my Blog
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I post in my blog once a week, you can find here things related to JavaScript,
                TypeScript, React, Web design, Styles, Tips and Tricks, Clean code Web design
              </p>
            </div>
          </div>
        </Fade>
      </header>
      <div className="blog-cards-div-main">
        <BlogCard theme={theme} posts={posts} />
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Blog;
