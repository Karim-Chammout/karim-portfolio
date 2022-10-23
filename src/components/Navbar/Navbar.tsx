import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';

import { greeting } from '../../portfolio';
import { ThemeType } from '../../theme';
import './Navbar.css';
// import { Nav, NavItem, NavLink, NavList } from './Navbar.style';
import SeoHeader from './seoHeader/SeoHeader';

const onMouseEnter = (event: any, color: string) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event: any) => {
  const el = event.target;
  el.style.backgroundColor = 'transparent';
};

const Navbar = ({ theme }: { theme: ThemeType }) => {
  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <nav className="header">
        <NavLink to="/splash" className="logo">
          <span className="logo-name" style={{ color: theme.text }}>
            {`<${greeting.logo_name} />`}
          </span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          <li>
            <NavLink
              to="/blog"
              style={({ isActive }) => ({
                color: theme.text,
                fontWeight: isActive ? 'bold' : '',
              })}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: theme.text,
                fontWeight: isActive ? 'bold' : '',
              })}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: theme.text,
                fontWeight: isActive ? 'bold' : '',
              })}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: theme.text,
                fontWeight: isActive ? 'bold' : '',
              })}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fade>
  );
};
export default Navbar;
