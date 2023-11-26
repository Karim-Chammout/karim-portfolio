import { Fade } from 'react-awesome-reveal';

import { Name, Text, Wrapper } from './Footer.style';

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <Wrapper>
      <Fade>
        <Text>
          Made with <span role="img">☕ & ❤️</span> by{' '}
          <Name onClick={() => window.open('https://github.com/Karim-Chammout', '_blank')}>
            Karim Chammout
          </Name>
        </Text>
        <Text>Copyright © {currentDate}</Text>
      </Fade>
    </Wrapper>
  );
};

export default Footer;
