import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';

import { greeting, settings } from '../../portfolio';
import { ThemeType } from '../../theme';
import SeoHeader from '../seoHeader/SeoHeader';
import './Header.css';

const onMouseEnter = (event: any, color: string) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event: any) => {
  const el = event.target;
  el.style.backgroundColor = 'transparent';
};

const Header = ({ theme }: { theme: ThemeType }) => {
  const link = settings.isSplash ? '/splash' : 'home';

  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header className="header">
          <NavLink to={link} className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <NavLink
                to="/blog"
                activeStyle={{ fontWeight: 'bold' }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                activeStyle={{ fontWeight: 'bold' }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeStyle={{ fontWeight: 'bold' }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeStyle={{ fontWeight: 'bold' }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
};
export default Header;
