import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../theme';

export const SectionWrapper = styled('section')(
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
    & > * {
      max-width: 95%;
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

export const ButtonWrapper = styled('div')(
  css`
    display: flex;
    justify-content: center;
    margin-top: 40px;
  `
);

export const CardsSection = styled('section')(
  css`
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    width: 100%;
  `
);

export const Card = styled('article')(
  ({ theme, imgurl }: { theme?: ThemeType; imgurl: string }) => css`
    border-radius: 16px;
    background: ${`url(${imgurl})`} no-repeat top center/cover;
    background-color: ${theme?.cardShadow};
    box-shadow: ${theme?.boxShadow} 0px 10px 30px -15px;
    cursor: pointer;
    overflow: hidden;
    width: 30%;
    height: 350px;
    display: flex;
    align-items: flex-end;
    margin: calc(5% / 3);
    position: relative;

    &:hover {
      box-shadow: ${theme?.boxShadow} 0px 20px 30px -10px;

      .content_hover {
        transform: translateY(0);
      }

      .desc_hover {
        display: block;
      }

      .tools_hover {
        margin: 10px 0;
      }
    }

    @media (max-width: 990px) {
      width: 47%;
      margin: 1.5%;
      height: 300px;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin: 15px 0;
    }
  `
);

export const Content = styled('article')(
  ({ theme }: { theme?: ThemeType }) => css`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: ${theme?.cardBgColor};
    padding: 20px;
    border-top-left-radius: 20px;
    transform: translateY(46%);
    transition: transform 0.3s;

    @media (max-width: 990px) {
      transform: translateY(48%);
    }

    @media (max-width: 768px) {
      transform: translateY(38%);
    }

    &::before {
      content: '';
      position: absolute;
      top: -52px;
      right: -48px;
      width: 100px;
      height: 100px;
      display: block;
      border-radius: 50%;
      box-shadow: inset -48px -48px ${theme?.cardBgColor};
    }
  `
);

export const ProjectName = styled('h5')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.text};
    font-size: 1.5em;
    font-weight: bold;
    margin: 0px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 1.25em;
    }
  `
);

export const ProjectDesc = styled('p')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.text};
    font-size: 1.25em;
    line-height: 1.4;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 10px 0;

    /* Check the weird behaviour */
    .desc_hover {
      display: none;
    }

    @media (max-width: 768px) {
      font-size: 1em;
    }
  `
);

export const Tools = styled('p')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.secondaryText};
    margin: 10px 0 40px 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  `
);
