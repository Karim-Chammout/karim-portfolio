import { Fade } from 'react-reveal';

import { greeting } from '../../portfolio';
import { ThemeType } from '../../theme';
import './Footer.css';

const Footer = ({ theme }: { theme: ThemeType }) => {
  return (
    <div className="footer-div">
      <Fade>
        <div>
          <p className="footer-text" style={{ color: theme.secondaryText }}>
            Made with <span role="img">☕ & ❤️</span> by {greeting.title}
          </p>
          <p className="footer-text" style={{ color: theme.secondaryText }}>
            Copyright © {new Date().getFullYear()}
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
