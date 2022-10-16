import { Fade } from 'react-reveal';

import { greeting } from '../../portfolio';
import { ThemeType } from '../../theme';
import './Footer.css';

const Footer = ({ theme }: { theme: ThemeType }) => {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with <span role="img">☕ & ❤️</span> by {greeting.title}
          <p>Copyright © {new Date().getFullYear()}</p>
        </p>
      </Fade>
    </div>
  );
};

export default Footer;
