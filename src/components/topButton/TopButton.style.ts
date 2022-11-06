import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../theme';

export const Wrapper = styled('div')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.body};
    background-color: ${theme?.text};
    border: solid 1px ${theme?.text};
    border-radius: 50%;
    padding: 1em 1.1em;
    z-index: 999;
    visibility: hidden;
    position: fixed;
    bottom: 1.2rem;
    right: 1.5rem;
    cursor: pointer;

    &:hover {
      color: ${theme?.text};
      background-color: ${theme?.body};
    }
  `
);
