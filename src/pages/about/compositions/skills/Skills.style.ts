import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../../../theme';

export const Wrapper = styled('div')(
  css`
    width: 100%;
    padding: 20px 10px;
    margin: 0px auto;
    margin-top: 4rem;
  `
);

export const H1 = styled('h1')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.text};
    font-size: 3.5em;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2.5em;
    }
  `
);

export const H3 = styled('h3')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.text};
    font-size: 2.75em;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 2em;
      text-align: center;
    }
  `
);

export const Text = styled('p')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.secondaryText};
    font-size: 1.5em;

    @media (max-width: 768px) {
      font-size: 1em;
      text-align: center;
    }
  `
);

export const SkillWrapper = styled('div')(
  css`
    display: flex;
    overflow: hidden;
    & > * {
      flex: 1;
      margin-bottom: 30px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      & > * {
        margin-bottom: 0;
      }
    }
  `
);

export const ImgWrapper = styled('div')(
  css`
    & > * {
      max-width: 100%;
      height: auto;
      margin-top: 100px;
    }

    @media (max-width: 768px) {
      order: 2;
      & > * {
        margin-top: 50px;
      }
    }
  `
);

export const ContentWrapper = styled('div')(
  css`
    align-self: center;
    margin-left: 50px;

    @media (max-width: 768px) {
      margin-left: 0px;
      margin: 20px;
    }
  `
);
