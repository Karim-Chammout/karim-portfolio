import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../theme';

export const Wrapper = styled('div')(
  css`
    margin: 6rem 0 2rem 0;
  `
);

export const Text = styled('p')(
  ({ theme }: { theme?: ThemeType }) => css`
    text-align: center;
    font-weight: bold;
    color: ${theme?.secondaryText};
  `
);

export const Name = styled('span')(
  css`
    font-weight: 900;
    font-style: italic;

    &:hover {
      cursor: pointer;
    }
  `
);
