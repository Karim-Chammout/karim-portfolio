import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../theme';

export const BodyStyles = css`
  body {
    padding: 0;
    margin: 0;
  }
`;

export const LogoWrapper = styled('div')(
  css`
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
  `
);

export const Screen = styled('div')(
  ({ theme }: { theme?: ThemeType }) => css`
    background: ${theme?.colors.black};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 50%;
    animation: grow 3s forwards;

    @keyframes grow {
      0% {
        transform: scale(0);
      }
      10% {
        transform: scale(1);
        border-radius: 0%;
        height: 100%;
        width: 100%;
      }
      90% {
        transform: scale(1);
        border-radius: 0%;
        height: 100%;
        width: 100%;
      }
      100% {
        transform: scale(0);
        transform-origin: 50% 50%;
        border-radius: 100%;
      }
    }
  `
);
