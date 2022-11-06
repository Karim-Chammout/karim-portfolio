import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { ThemeType } from '../../theme';

export const Nav = styled('nav')(
  ({ theme }: { theme?: ThemeType }) => css`
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

      /* Hacky solution for the hamburger icon for now */
      @media (max-width: 320px) {
        position: relative;
        margin-top: 10px;
      }
    }

    .navicon {
      background: ${theme?.text};
      display: block;
      height: 2px;
      position: relative;
      transition: background 0.2s ease-out;
      width: 18px;
      &:before,
      &:after {
        background: ${theme?.text};
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
      color: ${theme?.text};

      &:hover {
        background: ${theme?.highlight};
        color: ${theme?.textHover};
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
  `
);

export const NavList = styled('ul')(
  css`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    transition: max-height 0.2s ease-out;

    @media (max-width: 768px) {
      display: none;
    }
  `
);

export const NavItem = styled('li')(
  css`
    list-style: none;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  `
);

export const Logo = styled(NavLink)(
  ({ theme }: { theme?: ThemeType }) => css`
    display: block;
    text-decoration: none;
    font-size: 1.75em;
    font-weight: bold;
    font-style: italic;
    color: ${theme?.text};

    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  `
);

export const ToggleWrapper = styled('span')(css`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  user-select: none;

  &:hover {
    filter: drop-shadow(0 0 10px);
    transition: 0.2s ease-in;
  }
`);
