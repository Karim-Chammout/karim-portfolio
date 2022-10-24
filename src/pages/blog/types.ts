export interface PostType {
  _id: string;
  title?: string;
  author?: {
    name: string;
    image: string;
  };
  body?: object;
  slug: {
    current: string;
  };
  description: string;
}
