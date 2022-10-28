/* eslint-disable @typescript-eslint/no-explicit-any */
import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const sanityConfig = {
  projectId: import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_PUBLIC_SANITY_DATASET || 'production',
  token: import.meta.env.VITE_SANITY_API_TOKEN,
  apiVersion: '2022-08-12',
  useCdn: true,
};

const builder = ImageUrlBuilder(sanityConfig);
export const imgUrlFor = (source: any) => {
  return builder.image(source);
};

export default SanityClient(sanityConfig);
