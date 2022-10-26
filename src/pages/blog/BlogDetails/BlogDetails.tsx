/* eslint-disable @typescript-eslint/no-explicit-any */
import PortableText from 'react-portable-text';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import sanityClient, { imgUrlFor } from '../../../client';
import { Spinner } from '../../../components/Spinner';
import { PostType } from '../types';
import {
  AuthorImg,
  AuthorName,
  AuthorSection,
  BlogDesc,
  BlogTitle,
  Img,
  PortableStyles,
  SectionWrapper,
} from './BlogDetails.style';

const fetchPost = async (slug?: string) => {
  const singlePostQuery = `
    *[_type == 'post' && slug.current == '${slug}'][0]{
      _id,
      title,
      author-> {
        name,
        image
      },
      slug,
      description,
      mainImage,
      publishedAt,
      category-> {
        title,
        description
      },
      body
    }
    `;

  return sanityClient.fetch(singlePostQuery);
};

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: postData, isLoading, error } = useQuery<PostType>('post', () => fetchPost(slug));

  if (error || !postData) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  const publishedAtDate = new Date(postData.publishedAt)
    .toDateString()
    .split(' ')
    .slice(1)
    .join(' ');

  return (
    <SectionWrapper>
      <BlogTitle>{postData.title}</BlogTitle>
      <BlogDesc>{postData.description}</BlogDesc>
      <AuthorSection>
        <div>
          <AuthorImg src={imgUrlFor(postData.author?.image).url()} alt={postData?.title} />
        </div>
        <div style={{ marginLeft: '10px' }}>
          <AuthorName>{postData.author?.name}</AuthorName>
          <p style={{ margin: '0 0 5px 0' }}>
            Published at: <b>{publishedAtDate}</b>
          </p>
        </div>
      </AuthorSection>
      <Img src={imgUrlFor(postData.mainImage).url()} alt={postData.title} />
      <PortableStyles>
        <PortableText
          dataset={import.meta.env.VITE_PUBLIC_SANITY_DATASET}
          projectId={import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID}
          content={postData.body as any}
        />
      </PortableStyles>
    </SectionWrapper>
  );
};

export default BlogDetails;
