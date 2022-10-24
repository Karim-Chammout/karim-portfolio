import styled from 'styled-components';

import { ThemeType } from '../../theme';

const spinnerStles = styled.div`
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
    border: 6px solid #fff;
    border-color: ${({ theme }: { theme: ThemeType }) =>
      `${theme.imageHighlight} transparent ${theme.imageHighlight} transparent`};
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
`;

/**
 * Component style declarations
 */
export const StyledSpinner = spinnerStles;
