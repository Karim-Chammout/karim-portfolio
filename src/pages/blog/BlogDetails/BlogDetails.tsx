/* eslint-disable @typescript-eslint/no-explicit-any */
import PortableText from 'react-portable-text';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import sanityClient, { imgUrlFor } from '../../../client';
import { ScrollToTop } from '../../../components';
import { Spinner } from '../../../components/Spinner';
import NotFound from '../../notFound';
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

const imageLink = (asset: PostType['mainImage']) => imgUrlFor(asset).url();

const publishedAtDate = (date: string) =>
  new Date(date).toDateString().split(' ').slice(1).join(' ');

const StyledImage = ({ asset }: { asset: PostType['mainImage'] }) => (
  <Img src={imgUrlFor(asset).url()} onClick={() => window.open(imageLink(asset), '_blank')} />
);

const PortableContent = ({ content }: { content: any }) => {
  if (!content) return null;

  return (
    <PortableText
      dataset={import.meta.env.VITE_PUBLIC_SANITY_DATASET}
      projectId={import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID}
      content={content}
      serializers={{
        image: (props: any) => StyledImage(props),
      }}
    />
  );
};

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const {
    data: postData,
    isLoading,
    isFetched,
    isFetching,
    error,
  } = useQuery<PostType>('post', () => fetchPost(slug));

  /* TODO: Check react-query docs for the weird loading behaviour */
  if ((error || !postData) && (!isFetching || !isLoading)) {
    return <NotFound />;
  }

  /* TODO: Check react-query docs for the weird loading behaviour */
  if (isLoading || (isFetching && !isFetched)) {
    return <Spinner />;
  }

  return (
    <>
      <SectionWrapper>
        <BlogTitle>{postData.title}</BlogTitle>
        <BlogDesc>{postData.description}</BlogDesc>
        <AuthorSection>
          <div>
            {postData.author && (
              <AuthorImg
                src={imgUrlFor(postData.author.image).url()}
                alt={postData?.title}
                loading="lazy"
                onClick={() => window.open('https://github.com/Karim-Chammout', '_blank')}
              />
            )}
          </div>
          <div style={{ marginLeft: '10px' }}>
            <AuthorName>
              <em>{postData.author?.name}</em>
            </AuthorName>
            <p style={{ margin: '0 0 5px 0' }}>
              Published at:{' '}
              <b>
                <em>{publishedAtDate(postData.publishedAt)}</em>
              </b>
            </p>
          </div>
        </AuthorSection>
        {postData.mainImage && (
          <Img
            src={imgUrlFor(postData.mainImage).url()}
            alt={postData.title}
            onClick={() => window.open(imageLink(postData.mainImage), '_blank')}
            loading="lazy"
          />
        )}
        <PortableStyles>
          <PortableContent content={postData.body} />
        </PortableStyles>
      </SectionWrapper>
      <ScrollToTop />
    </>
  );
};

export default BlogDetails;
