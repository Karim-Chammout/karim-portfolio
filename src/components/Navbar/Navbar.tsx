import { useContext, useEffect, useRef } from 'react';
import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';

import Dark from '../../assets/Dark';
import Light from '../../assets/Light';
import { ThemeContext } from '../../globals/context';
import { Logo, Nav, NavItem, NavList, ToggleWrapper } from './Navbar.style';

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
    name: 'Contact',
  },
];

const Navbar = () => {
  const { selectedTheme, themeToggler } = useContext(ThemeContext);

  const checkedInput = useRef<HTMLInputElement>(null);

  const closeNav = () => {
    if (checkedInput.current) {
      checkedInput.current.checked = false;
    }
  };

  const handleThemeToggler = () => {
    themeToggler();
    closeNav();
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
        <Logo to="/splash">{`<KarimChammout />`}</Logo>
        <input className="menu-btn" type="checkbox" id="menu-btn" ref={checkedInput} />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <NavList>
          <ToggleWrapper onClick={handleThemeToggler}>
            {selectedTheme === 'light' ? <Dark /> : <Light />}
          </ToggleWrapper>
          {links.map(({ name, to }) => (
            <NavItem key={name}>
              <NavLink
                className="nav-link"
                to={to}
                onClick={closeNav}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : '',
                })}
              >
                {name}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </Fade>
  );
};
export default Navbar;
