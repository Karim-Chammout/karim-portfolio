import { createGlobalStyle } from 'styled-components';

import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }: { theme: ThemeType }) => theme.body};
    color: ${({ theme }: { theme: ThemeType }) => theme.text};
    display: block;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }`;
