import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import sanityClient from '../../../../client';

// interface BlogDetailsType {
//   theme?: ThemeType;
// }

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [singlePost, setSinglePosts] = useState<any>({});

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
