import { useState } from 'react';
import { useQuery } from 'react-query';
import { Fade } from 'react-reveal';

import sanityClient from '../../client';
import { Spinner } from '../../components/Spinner';
import { H1, ImgWrapper, InfoWrapper, SectionWrapper, Text } from './Blog.style';
import BlogImage from './BLogImage';
import { BlogCard } from './components';
import { PostType } from './types';

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
        mainImage,
        category-> {
          title,
          description
        },
        body
      }
    `;

  return sanityClient.fetch(postQuery);
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, error } = useQuery<PostType[]>('posts', fetchAllPosts);

  if (error || !data) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  const filteredPosts = data.filter((post) => {
    return post.title?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Fade bottom duration={2000} distance="40px">
        <SectionWrapper>
          <ImgWrapper>
            <BlogImage />
          </ImgWrapper>
          <InfoWrapper>
            <H1>This is my Blog</H1>
            <Text>
              I post in my blog once a week, you can find here things related to JavaScript,
              TypeScript, React, Web design, Styles, Tips and Tricks, Clean code Web design
            </Text>
          </InfoWrapper>
        </SectionWrapper>
      </Fade>
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
              border: `1px solid #7F8DAA`,
              borderRadius: '4px',
            }}
          />
        </div>
        {filteredPosts.length > 0 ? <BlogCard posts={filteredPosts} /> : <h1>No result found!</h1>}
      </Fade>
    </>
  );
};

export default Blog;
