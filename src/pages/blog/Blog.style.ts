import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../theme';

export const SectionWrapper = styled('section')(
  css`
    display: flex;
    align-items: center;
    gap: 20px;

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
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
      max-width: 90%;
      height: auto;
    }
  `
);

export const InfoWrapper = styled('div')(
  css`
    text-align: center;
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

export const SearchWrapper = styled('div')(
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px 0;
  `
);

export const InputWrppaer = styled('div')(
  ({ theme }: { theme?: ThemeType }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    & > label {
      color: ${theme?.text};
      font-size: 1.25em;
    }
  `
);

export const SearchInput = styled('input')(
  ({ theme }: { theme?: ThemeType }) => css`
    width: 300px;
    height: 40px;
    padding: 8px;
    border: 1px solid ${theme?.secondaryText};
    border-radius: 4px;

    @media (max-width: 350px) {
      width: 100%;
    }
  `
);

export const NoResultWrapper = styled('div')(
  ({ theme }: { theme?: ThemeType }) => css`
    & > p {
      color: ${theme?.text};
      font-size: 1.5em;
      font-weight: bold;
      line-height: 1.5;
      text-align: center;
    }

    & > svg {
      width: 100%;
      height: 150px;
    }
  `
);
