import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SVG = styled('svg')(
  css`
    height: 305;
    width: 440;
    margin-left: 75px;

    @media screen and (min-width: 768px) {
      margin-left: 160px;
    }
  `
);
