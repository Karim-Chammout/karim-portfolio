import { css } from '@emotion/react';

import { darkTheme, lightTheme } from '../theme';

export const globalStyles = (selectedTheme: string) => css`
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
    background-color: ${selectedTheme === 'light' ? lightTheme.body : darkTheme.body};
    color: ${selectedTheme === 'light' ? lightTheme.text : darkTheme.text};
    display: block;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
