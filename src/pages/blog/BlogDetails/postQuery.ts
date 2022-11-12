import sanityClient from '../../../client';

export const fetchPost = async (slug?: string) => {
  const postQuery = `
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
      _updatedAt,
      categories[]-> {
        title,
        description
      },
      body,
      'comments': *[
        _type == 'comment' &&
        post._ref == ^._id &&
        approved == true
      ]| order(_createdAt desc)
    }
    `;

  return sanityClient.fetch(postQuery);
};
