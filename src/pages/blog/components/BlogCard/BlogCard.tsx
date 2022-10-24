import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

import { ThemeType } from '../../../../theme';
import { PostType } from '../../types';
import './BlogCard.css';
import { Card, CardContainer } from './BlogCard.style';

const BlogCard = ({ theme, posts }: { theme: ThemeType; posts: PostType[] }) => {
  return (
    <Fade bottom duration={2000} distance="40px">
      <CardContainer>
        {posts.map((post) => (
          <Card key={post.title}>
            <Link to={`/blog/${post.slug.current}`} className="blog-link">
              <div className="blog-name-div">
                <p className="blog-name" style={{ color: theme.text }}>
                  {post.title}
                </p>
              </div>
              <p className="blog-description" style={{ color: theme.text }}>
                {post.description}
              </p>
            </Link>
            <div className="blog-details">
              <p className="blog-tags" style={{ color: theme.secondaryText }}>
                Tags: {post.author?.name}
              </p>
            </div>
          </Card>
        ))}
      </CardContainer>
    </Fade>
  );
};

export default BlogCard;
