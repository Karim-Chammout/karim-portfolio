import { useState } from 'react';
import { useQuery } from 'react-query';
import { Fade } from 'react-reveal';

import NoResult from '../../assets/images/NoResult';
import sanityClient from '../../client';
import { Spinner } from '../../components/Spinner';
import NotFound from '../notFound';
import { H1, ImgWrapper, InfoWrapper, NoResultWrapper, SectionWrapper, Text } from './Blog.style';
import BlogImage from './BLogImage';
import { BlogCard } from './components';
import { PostType } from './types';

const fetchAllPosts = async () => {
  const postQuery = `
      *[_type == 'post']| order(_createdAt desc){
        _id,
        title,
        author-> {
          name,
          image
        },
        slug,
        description,
        mainImage,
        categories[] -> {
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

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !data) {
    return <NotFound />;
  }

  const filteredPosts = data.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categories
        .map((c) => c.title.toLowerCase())
        .join(' ')
        .toString()
        .includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <Fade bottom duration={2000} distance="40px">
        <SectionWrapper>
          <ImgWrapper>
            <BlogImage />
          </ImgWrapper>
          <InfoWrapper>
            <H1>Karim Blog</H1>
            <Text>
              I write articles related to web development. You can find here things about
              JavaScript, TypeScript, React, Tips and Tricks and web technologies in general.
            </Text>
          </InfoWrapper>
        </SectionWrapper>
      </Fade>
      <Fade bottom duration={2000} distance="40px">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '50px 0',
          }}
        >
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, description, or tags"
            style={{
              width: '300px',
              height: '40px',
              padding: '8px',
              border: `1px solid #7F8DAA`,
              borderRadius: '4px',
            }}
          />
          {searchQuery && filteredPosts.length > 0 && (
            <p>
              {filteredPosts.length} {filteredPosts.length > 1 ? 'results' : 'result'} found
            </p>
          )}
        </div>
        {filteredPosts.length > 0 ? (
          <BlogCard posts={filteredPosts} />
        ) : (
          <NoResultWrapper>
            <p>No result found!</p>
            <NoResult />
          </NoResultWrapper>
        )}
      </Fade>
    </>
  );
};

export default Blog;
