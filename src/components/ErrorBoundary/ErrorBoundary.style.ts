import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled('div')(
  css`
    background: #232323;
    color: #fff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  `
);

export const Content = styled('div')(
  css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  `
);
