import sanityClient from '../../client';

export const fetchAllPosts = async () => {
  const postsQuery = `
      *[_type == 'post' && !(_id in path("drafts.**"))]| order(_createdAt desc){
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
        }
      }
    `;

  return sanityClient.fetch(postsQuery);
};
