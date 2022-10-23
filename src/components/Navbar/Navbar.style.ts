import { NavLink as NavLinkComponent } from 'react-router-dom';
import styled from 'styled-components';

// import { ThemeType } from '../../theme';

const navStyles = styled.nav`
  max-width: 100%;
  padding: 20px 0;
  margin: 0px auto;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 960px) and (min-width: 768px) {
    font-size: 12px;
  }

  .logo {
    display: block;
    float: left;
    font-size: 1.5em;
    text-decoration: none;
    margin-top: 10px;
    line-height: normal;
  }
  .logo-name {
    font-family: 'Google Sans Bold Italic';
    font-weight: bold;
    padding: 0 1px;
  }

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
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
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
      top: 0;
    }
    &:before {
      top: 5px;
    }
    &:after {
      top: -5px;
    }
  }
  .menu-btn {
    display: none;
  }
  .menu-btn:checked ~ .menu {
    max-height: 370px;
  }
  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  @media (min-width: 768px) {
    .menu-icon {
      display: none;
    }
  }
`;

const navListStyles = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;

  @media (min-width: 768px) {
    max-height: none;
  }
`;

const navItemStyles = styled.li`
  a {
    padding: 20px 20px;
  }
  @media (min-width: 768px) {
    float: left;
  }
`;

const navLinkStyles = styled(NavLinkComponent)`
  display: block;
  /* padding: 20px 20px; */
  text-decoration: none;
`;

/**
 * Component style declarations
 */
export const Nav = navStyles;
export const NavList = navListStyles;
export const NavItem = navItemStyles;
export const NavLink = navLinkStyles;
