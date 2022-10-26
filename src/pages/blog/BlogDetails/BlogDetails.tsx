import { PortableText } from '@portabletext/react';
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
import { CustomComponents } from './compositions';

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

const imgLink = (asset: PostType['mainImage']) => imgUrlFor(asset).url();

const publishedAtDate = (date: string) =>
  new Date(date).toDateString().split(' ').slice(1).join(' ');

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
                src={imgLink(postData.author.image)}
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
            src={imgLink(postData.mainImage)}
            alt={postData.title}
            onClick={() => window.open(imgLink(postData.mainImage), '_blank')}
            loading="lazy"
          />
        )}
        <PortableStyles>
          <PortableText value={postData.body} components={CustomComponents} />
        </PortableStyles>
      </SectionWrapper>
      <ScrollToTop />
    </>
  );
};

export default BlogDetails;
