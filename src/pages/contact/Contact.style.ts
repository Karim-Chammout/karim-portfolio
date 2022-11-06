import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../theme';

export const SectionWrapper = styled('div')(
  css`
    display: flex;
    align-items: center;

    & > * {
      flex: 1;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `
);

export const ImgWrapper = styled('div')(
  css`
    align-items: center;
    justify-content: center;

    & > * {
      max-width: 100%;
      height: auto;
    }
  `
);

export const Image = styled('img')(
  css`
    border-radius: 50%;
    margin-bottom: 10px;
  `
);

export const ContactInfo = styled('div')(
  css`
    text-align: center;
    align-self: center;
  `
);

export const H1 = styled('h1')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.text};
    font-size: 3.5em;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 2.5em;
    }
  `
);

export const SubHeader = styled('span')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.secondaryText};
    font-size: 1.25em;
    line-height: 1.5;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1em;
    }
  `
);

export const Text = styled('p')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.secondaryText};
    font-size: 1.25em;
    line-height: 1.5;
    margin: 0 20px 20px;

    @media (max-width: 768px) {
      font-size: 1em;
    }
  `
);

export const ButtonWrapper = styled('div')(
  css`
    display: flex;
    justify-content: center;
    margin: 20px 0;
  `
);
