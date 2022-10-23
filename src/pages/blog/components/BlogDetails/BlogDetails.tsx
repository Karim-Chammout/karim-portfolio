import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import sanityClient from '../../../../client';
import { ThemeType } from '../../../../theme';
import { Post } from '../../Blog';

interface BlogDetailsType {
  theme?: ThemeType;
}

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
      category-> {
        title,
        description
      },
      body
    }
    `;

  return sanityClient.fetch(singlePostQuery);
};

const BlogDetails = ({ theme }: BlogDetailsType) => {
  const { slug } = useParams<{ slug: string }>();
  const { data: postData, isLoading, error } = useQuery<Post>('post', () => fetchPost(slug));

  if (error || !postData) {
    return null;
  }

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          height: '100vh',
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div>
      <h1>Blog Details</h1>
      <h1>{postData?.title}</h1>
      <h1>{postData?.description}</h1>
      <h1>{postData?.author?.name}</h1>
    </div>
  );
};

export default BlogDetails;
