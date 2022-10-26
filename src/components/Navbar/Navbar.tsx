import { useEffect, useRef } from 'react';
import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';

import { Logo, Nav, NavItem, NavList } from './Navbar.style';

const links = [
  {
    to: '/blog',
    name: 'Blog',
  },
  {
    to: '/projects',
    name: 'Projects',
  },
  {
    to: '/about',
    name: 'About',
  },
  {
    to: '/contact',
    name: 'Contact Me',
  },
];

const Navbar = () => {
  const checkedInput = useRef<HTMLInputElement>(null);

  const closeNav = () => {
    if (checkedInput.current) {
      checkedInput.current.checked = false;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        closeNav();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Fade top duration={1000} distance="20px">
      <Nav>
        <Logo to="/splash">{`<Karim Chammout />`}</Logo>
        <input className="menu-btn" type="checkbox" id="menu-btn" ref={checkedInput} />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <NavList>
          {links.map((link) => (
            <NavItem key={link.name}>
              <NavLink
                className="nav-link"
                to={link.to}
                onClick={closeNav}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : '',
                })}
              >
                {link.name}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </Fade>
  );
};
export default Navbar;
