import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

import { ThemeType } from '../../../../theme';
import './BlogCard.css';

const BlogCard = ({ theme, posts }: { theme: ThemeType; posts: any[] }) => {

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="blog_cards_container">
        {posts &&
          posts?.map((post) => (
            <article
              key={post.title}
              className="blog-card-div"
              style={{ backgroundColor: theme.highlight }}
            >
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
                <p className="blog-tags subTitle" style={{ color: theme.secondaryText }}>
                  Tags: {post.author.name}
                </p>
              </div>
            </article>
          ))}
      </div>
    </Fade>
  );
};

export default BlogCard;
