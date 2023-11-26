import { imgUrlFor } from 'client';
import { Fade } from 'react-awesome-reveal';

import code from '../../../../assets/images/code.jpg';
import { Post } from '../../types';
import { BlogDesc, BlogName, Card, CardContainer, Content, Tag, Tags } from './BlogCard.style';

const BlogCard = ({ posts }: { posts: Array<Post> }) => {
  return (
    <Fade duration={1000}>
      <CardContainer>
        {posts.map((post) => (
          <Card
            key={post.title}
            to={`/blog/${post.slug.current}`}
            imgurl={post.mainImage ? imgUrlFor(post.mainImage).url() : code}
          >
            <Content className="content_hover">
              <BlogName title={post.title}>{post.title}</BlogName>
              <Tags>
                Tags:{' '}
                {post.categories.map((c, i, categoryArr) => (
                  <span key={c.title}>
                    {/*  i + 1 !== categoryArr.length => Check if not the last element to render a separator */}
                    <Tag className="tag">{c.title}</Tag> {i + 1 !== categoryArr.length && '- '}
                  </span>
                ))}
              </Tags>
              <BlogDesc>{post.description}</BlogDesc>
            </Content>
          </Card>
        ))}
      </CardContainer>
    </Fade>
  );
};

export default BlogCard;
