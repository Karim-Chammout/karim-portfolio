import { Fade } from 'react-reveal';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import TopButton from '../../components/topButton/TopButton';
import { ThemeType } from '../../theme';
import './Blog.css';
import BlogImage from './BLogImage';
import { BlogCard } from './components';

const Blog = ({ theme }: { theme: ThemeType }) => {
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
        <BlogCard theme={theme} />
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Blog;
