import { createGlobalStyle } from 'styled-components';

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
