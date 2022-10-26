import { useNavigate } from 'react-router-dom';

import { Button } from '../../components';
import { Wrapper } from './NotFound.style';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1 style={{ margin: '0' }}>Dude! Where is my page?</h1>
      <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Oops, Page not found!</p>
      <Button text="Go to Blog page" onClick={() => navigate('/blog')} />
    </Wrapper>
  );
};

export default NotFound;
