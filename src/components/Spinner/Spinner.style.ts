import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../theme';

export default styled('div')(
  ({ theme }: { theme?: ThemeType }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
      content: ' ';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid ${theme?.colors.white};
      border-color: ${`${theme?.highlight} transparent ${theme?.highlight} transparent`};
      animation: dual-ring 1.2s linear infinite;
    }

    @keyframes dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
);
