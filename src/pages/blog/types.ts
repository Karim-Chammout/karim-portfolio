export interface PostType {
  _id: string;
  title?: string;
  author?: {
    name: string;
    image: {
      asset: {
        _ref: string;
      };
    };
  };
  body: [];
  mainImage: {
    asset: {
      _ref: string;
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
