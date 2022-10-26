import { Link } from 'react-router-dom';

import { Button } from '../../components';
import { Wrapper } from './NotFound.style';

const NotFound = () => {
  return (
    <Wrapper>
      <h1 style={{ margin: '0' }}>Dude! Where is my page?</h1>
      <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Oops, Page not found!</p>
      <Link to="/blog" style={{ textDecoration: 'none' }}>
        <Button text="Go to Blog page" />
      </Link>
    </Wrapper>
  );
};

export default NotFound;
