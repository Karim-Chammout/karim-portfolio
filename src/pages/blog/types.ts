export interface PostType {
  _id: string;
  title: string;
  author: {
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
  categories: Array<{
    title: string;
    description: string;
  }>;
  slug: {
    current: string;
  };
  description: string;
  comments?: Array<Comment>;
  publishedAt: string;
  _updatedAt: string;
}

export interface Comment {
  comment: string;
  name: string;
  email: string;
  approved: boolean;
  _createdAt: string;
  post: {
    _ref: string;
    _type: string;
  };
  _id: string;
}
