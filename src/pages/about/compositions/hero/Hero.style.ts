import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../../../theme';

export const Wrapper = styled('div')(
  css`
    width: 100%;
    padding: 20px 0;
    margin: 0px auto;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      display: block;
    }
  `
);

export const Content = styled('div')(
  css`
    flex: 1;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  `
);

export const H1 = styled('h1')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.text};
    font-size: 3em;

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
    line-height: 1.6;
    margin-right: 40px;

    @media (max-width: 768px) {
      font-size: 1.25em;
      line-height: 1.4;
      margin-right: 0;
      text-align: center;
    }
  `
);

export const ImageWrapper = styled('div')(
  css`
    flex: 1;

    & > * {
      max-width: 100%;
      height: auto;
    }
  `
);

export const SocialMediaWrapper = styled('div')(
  css`
    @media (max-width: 768px) {
      text-align: center;
    }
  `
);

export const ButtonWrapper = styled('div')(
  css`
    margin-top: 20px;

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  `
);
