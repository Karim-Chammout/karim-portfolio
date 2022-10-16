import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import sanityClient from '../../../../client';
import { ThemeType } from '../../../../theme';
import { Post } from '../../Blog';

interface BlogDetailsType {
  theme?: ThemeType;
}

const BlogDetails = ({ theme }: BlogDetailsType) => {
  const { slug } = useParams<{ slug: string }>();
  const [singlePost, setSinglePosts] = useState<Post>();

  useEffect(() => {
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
    sanityClient
      .fetch(singlePostQuery)
      .then((data) => setSinglePosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Blog Details</h1>
      <h1>{singlePost?.title}</h1>
      <h1>{singlePost?.description}</h1>
      <h1>{singlePost?.author?.name}</h1>
    </div>
  );
};

export default BlogDetails;
