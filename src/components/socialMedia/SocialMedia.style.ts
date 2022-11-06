import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../theme';

export const IconWrapper = styled('span')(
  ({ theme, backgroundColor }: { theme?: ThemeType; backgroundColor: string }) => css`
    img {
      background-color: ${backgroundColor};
      margin: 0 5px;
      padding: 8px;
      border-radius: 25%;
    }

    img:hover {
      background-color: ${theme?.text};
      transition: 0.3s ease-in;
    }
  `
);
