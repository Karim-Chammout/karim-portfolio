export interface PostType {
  _id: string;
  title?: string;
  author?: {
    name: string;
    image: string;
  };
  body: object;
  mainImage: {
    assets: {
      url: string;
    };
  };
  categories?: Array<{
    title: string;
    description: string;
  }>;
  slug: {
    current: string;
  };
  description: string;
  publishedAt: string;
}
