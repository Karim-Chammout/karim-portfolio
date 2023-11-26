import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import BlogSVG from '../../assets/BlogSVG';
import NoResultSVG from '../../assets/NoResultSVG';
import { Spinner } from '../../components/Spinner';
import { blog } from '../../portfolio';
import NotFound from '../notFound';
import {
  H1,
  ImgWrapper,
  InfoWrapper,
  InputWrppaer,
  NoResultWrapper,
  SearchInput,
  SearchWrapper,
  SectionWrapper,
  Text,
} from './Blog.style';
import { BlogCard } from './components';
import { fetchAllPosts } from './postsQuery';
import { Post } from './types';

const { title, description } = blog;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, isError } = useQuery<Array<Post>>(['posts'], fetchAllPosts);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !data) {
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
      <Fade duration={1000}>
        <SectionWrapper>
          <ImgWrapper>
            <BlogSVG />
          </ImgWrapper>
          <InfoWrapper>
            <H1>{title}</H1>
            <Text>{description}</Text>
          </InfoWrapper>
        </SectionWrapper>
      </Fade>
      <Fade duration={2000}>
        <SearchWrapper>
          <InputWrppaer>
            <label htmlFor="search">Search</label>
            <SearchInput
              id="search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, description, or tags"
            />
          </InputWrppaer>
          {searchQuery && filteredPosts.length > 0 && (
            <p>
              {filteredPosts.length} {filteredPosts.length > 1 ? 'results' : 'result'} found
            </p>
          )}
        </SearchWrapper>
        {filteredPosts.length > 0 ? (
          <BlogCard posts={filteredPosts} />
        ) : (
          <NoResultWrapper>
            <p>No results found!</p>
            <NoResultSVG />
          </NoResultWrapper>
        )}
      </Fade>
    </>
  );
};

export default Blog;
