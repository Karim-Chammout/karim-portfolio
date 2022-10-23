import { useState } from 'react';
import { useQuery } from 'react-query';
import { Fade } from 'react-reveal';

import sanityClient from '../../client';
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
  };
  description: string;
}

const fetchAllPosts = async () => {
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

  return sanityClient.fetch(postQuery);
};

const Blog = ({ theme }: { theme: ThemeType }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, error } = useQuery<Post[]>('posts', fetchAllPosts);

  if (error || !data) {
    return null;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const filteredPosts = data.filter((post) => {
    return post.title?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="blog-main">
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
      <Fade bottom duration={2000} distance="40px">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for an article..."
            style={{
              width: '300px',
              height: '40px',
              margin: '50px 0',
              padding: '8px',
              border: `1px solid ${theme.secondaryText}`,
              borderRadius: '4px',
            }}
          />
        </div>
        <div className="blog-cards-div-main">
          {filteredPosts.length > 0 ? (
            <BlogCard theme={theme} posts={filteredPosts} />
          ) : (
            <h1>No result found!</h1>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Blog;
