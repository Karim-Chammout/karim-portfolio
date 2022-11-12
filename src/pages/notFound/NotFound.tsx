import { useNavigate } from 'react-router-dom';

import { Button } from '../../components';
import { Wrapper } from './NotFound.style';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Oops, Page not found!</h1>
      <p>Dude! Where is my page?</p>
      <Button text="Go to Blog page" onClick={() => navigate('/blog')} />
    </Wrapper>
  );
};

export default NotFound;
