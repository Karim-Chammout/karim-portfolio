import { Fade } from 'react-reveal';
import { Link, useParams } from 'react-router-dom';

import { ThemeType } from '../../../../theme';
import './BlogCard.css';

const projectsData = [
  {
    id: 1,
    name: 'The fact of the day',
    url: 'https://fact-of-the-day.karim-dev.com',
    description: 'A web application where we share a new fact everyday to learn something new',
    tools: 'HTML - CSS - @emotion/react - MUI - React - Firebase',
  },
  {
    id: 2,
    name: 'OxygenDevs',
    url: 'https://github.com/Karim-Chammout/Oxygen-Devs',
    description: 'Web Design Agency',
    tools: 'HTML - CSS - BootStrap',
  },
  {
    id: 3,
    name: 'Google Assistant Bootstrap',
    url: 'https://github.com/Karim-Chammout/Google-Assistant-Bootstrap',
    description: 'Google Assistant Design with Bootstrap',
    tools: 'HTML - CSS - BootStrap',
  },
  {
    id: 4,
    name: 'Portfolio Design',
    url: 'https://github.com/Karim-Chammout/Temporary-Portfolio',
    description: 'Designing a template for a portfolio',
    tools: 'HTML - CSS - BootStrap',
  },
  {
    id: 5,
    name: 'React TV Show',
    url: 'https://github.com/Karim-Chammout/react-tvshow-project',
    description: 'TV Shows Application To search for your favorite shows',
    tools: 'HTML - CSS - BootStrap - React - React-router-dom',
  },
  {
    id: 6,
    name: 'React Tesla clone',
    url: 'https://github.com/Karim-Chammout/tesla-clone',
    description: 'Cloning the original Tesla website using React.js',
    tools: 'HTML - CSS - Styled-components - React - React-redux - React-reveal',
  },
];

const BlogCard = ({ theme }: { theme: ThemeType }) => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="blog_cards_container">
      <Fade bottom duration={2000} distance="40px">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="blog-card-div"
            style={{ backgroundColor: theme.highlight }}
          >
            <Link to={`/blog/${slug}`} className="blog-link">
              <div className="blog-name-div">
                <p className="blog-name" style={{ color: theme.text }}>
                  {project.name}
                </p>
              </div>
              <p className="blog-description" style={{ color: theme.text }}>
                {project.description}
              </p>
            </Link>
            <div className="blog-details">
              <p className="blog-tags subTitle" style={{ color: theme.secondaryText }}>
                Tags: {project.tools}
              </p>
            </div>
          </article>
        ))}
      </Fade>
    </div>
  );
};

export default BlogCard;
