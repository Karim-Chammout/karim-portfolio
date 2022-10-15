import { Fade } from 'react-reveal';

import './Footer.css';
import { greeting } from '../../portfolio';
import { ThemeType } from '../../theme';

const Footer = ({ theme }: { theme: ThemeType }) => {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with <span role="img">☕ & ❤️</span> by {greeting.title}
        </p>
      </Fade>
    </div>
  );
};

export default Footer;
