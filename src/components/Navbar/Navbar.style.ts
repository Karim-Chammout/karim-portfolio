import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ThemeType } from '../../theme';

const navStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 50px;

  .menu-btn {
    display: none;
  }

  .menu-icon {
    cursor: pointer;
    padding: 28px 20px;
    position: absolute;
    right: 0;
    margin-top: -15px;
    display: none;
    user-select: none;
  }

  .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
    &:before,
    &:after {
      background: #333;
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
    }
    &:before {
      top: 5px;
    }
    &:after {
      top: -5px;
    }
  }

  .menu-btn:checked ~ ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 275px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
    top: 0;
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
    top: 0;
  }

  .nav-link {
    text-decoration: none;
    display: block;
    padding: 20px;
    box-sizing: border-box;
    color: ${({ theme }: { theme: ThemeType }) => theme.text};
    &:hover {
      background: ${({ theme }: { theme: ThemeType }) => theme.highlight};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    .menu-icon {
      display: flex;
    }
  }
`;

const navListStyles = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  transition: max-height 0.2s ease-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

const navItemStyles = styled.li`
  list-style: none;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const logoStyles = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 1.75em;
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }: { theme: ThemeType }) => theme.text};
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

/**
 * Component style declarations
 */
export const Nav = navStyles;
export const NavList = navListStyles;
export const NavItem = navItemStyles;
export const Logo = logoStyles;
