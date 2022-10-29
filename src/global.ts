import styled, { createGlobalStyle, css } from 'styled-components';

import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    scroll-behavior: smooth;
  }

  html::-webkit-scrollbar {
    width: 0.5rem;
  }

  html::-webkit-scrollbar-thumb {
    background-color: darkgray;
  }

  body {
    background: ${({ theme }: { theme: ThemeType }) => theme.body};
    color: ${({ theme }: { theme: ThemeType }) => theme.text};
    display: block;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }`;

export const ProgressBar = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.text} ${({ scroll }: { scroll: number }) => `${scroll}%`},
    transparent 0
  );
  width: 100%;
  height: 5px;
  z-index: 3;
  left: 0;
  bottom: 0;
`;

export const FullWidthSection = css`
  @media screen and (min-width: 768px) {
    margin-left: calc(-100vw / 2 + 718px / 2);
    margin-right: calc(-100vw / 2 + 718px / 2);
  }
  @media screen and (min-width: 990px) {
    margin-left: calc(-100vw / 2 + 938px / 2);
    margin-right: calc(-100vw / 2 + 938px / 2);
  }
  @media screen and (min-width: 1200px) {
    margin-left: calc(-100vw / 2 + 1148px / 2);
    margin-right: calc(-100vw / 2 + 1148px / 2);
  }
  @media screen and (min-width: 1400px) {
    margin-left: calc(-100vw / 2 + 1348px / 2);
    margin-right: calc(-100vw / 2 + 1348px / 2);
  }
`;
