import { Fade } from 'react-reveal';

import { greeting } from '../../portfolio';
import { Name, Text, Wrapper } from './Footer.style';

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <Wrapper>
      <Fade>
        <Text>
          Made with <span role="img">☕ & ❤️</span> by <Name>{greeting.title}</Name>
        </Text>
        <Text>Copyright © {currentDate}</Text>
      </Fade>
    </Wrapper>
  );
};

export default Footer;
