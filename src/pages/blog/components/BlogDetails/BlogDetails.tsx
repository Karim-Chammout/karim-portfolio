import { ThemeType } from '../../../../theme';

interface BlogDetailsType {
  slug?: string;
  theme?: ThemeType;
}

const BlogDetails = ({ slug }: BlogDetailsType) => {
  return (
    <div>
      <h1>Blog Details {slug}</h1>
    </div>
  );
};

export default BlogDetails;
