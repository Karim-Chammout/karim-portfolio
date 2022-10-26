import { Fade } from 'react-reveal';

import { PostType } from '../../types';
import { BlogDesc, BlogName, Card, CardContainer, LinkCard, Tags } from './BlogCard.style';

const BlogCard = ({ posts }: { posts: PostType[] }) => {
  return (
    <Fade bottom duration={2000} distance="40px">
      <CardContainer>
        {posts.map((post) => (
          <Card key={post.title}>
            <LinkCard to={`/blog/${post.slug.current}`}>
              <BlogName>{post.title}</BlogName>
              <BlogDesc>{post.description}</BlogDesc>
              <Tags>
                Tags:
                {post.categories?.map((c, i, cateArr) => (
                  <span key={c.title}>
                    {' '}
                    {/*  i + 1 !== cateArr.length  => Check if not the last element to render a separator */}
                    {c.title} {i + 1 !== cateArr.length && '-'}
                  </span>
                ))}
              </Tags>
            </LinkCard>
          </Card>
        ))}
      </CardContainer>
    </Fade>
  );
};

export default BlogCard;
