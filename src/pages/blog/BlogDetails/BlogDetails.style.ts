import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../../theme';

export const SectionWrapper = styled('div')(
  css`
    margin: 0 13%;
    overflow: hidden;

    @media (max-width: 1200px) {
      margin: 0 10%;
    }

    @media (max-width: 990px) {
      margin: 0 5%;
    }

    @media (max-width: 768px) {
      margin: 0;
    }
  `
);

export const BlogTitle = styled('h1')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.text};
    font-size: 2.5em;
    font-weight: bold;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.75em;
    }
  `
);

export const BlogDesc = styled('p')(
  ({ theme }: { theme?: ThemeType }) => css`
    color: ${theme?.secondaryText};
    font-size: 1.5em;
    line-height: 1.4;
    margin: 15px 0;

    @media (max-width: 768px) {
      font-size: 1em;
      margin: 10px 0;
    }
  `
);

export const AuthorSection = styled('div')(
  css`
    display: flex;
    align-items: flex-start;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  `
);

export const AuthorImg = styled('img')(
  css`
    object-fit: cover;
    border-radius: 50%;
    height: 75px;
    width: 75px;

    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;
      transition: 0.3s ease-in-out;
      scale: 1.009;
    }
  `
);

export const AuthorName = styled('p')(
  css`
    margin: 10px 0;
    font-weight: bold;
    font-style: italic;

    &:hover {
      cursor: pointer;
    }
  `
);

export const Img = styled('img')(
  css`
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;
      transition: 0.3s ease-in-out;
    }
  `
);

export const PortableStyles = styled('div')(
  ({ theme }: { theme?: ThemeType }) => css`
    margin-top: 50px;

    & > p {
      font-size: 1.25em;
      line-height: 1.6;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 1em;
      }
    }

    /* Sanityio class for highlighted elements */
    .unknown__pt__mark__highlight {
      background-color: ${theme?.highlight};
      color: ${theme?.colors.black};
    }
  `
);

export const StyledForm = styled('form')(
  css`
    padding: 5px;
    max-width: 350px;
    margin: 0 auto 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
);

export const Text = styled('p')(
  css`
    font-size: 1.25em;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1em;
    }
  `
);

export const Line = styled('div')(
  ({ theme }: { theme?: ThemeType }) => css`
    height: 1px;
    background-color: ${theme?.secondaryText};
    margin: 50px 0;
  `
);

export const Label = styled('label')(
  css`
    display: block;
    width: 100%;
    margin: 10px 0;
  `
);

export const Input = styled('input')(
  ({ theme, hasError }: { theme?: ThemeType; hasError: boolean }) => css`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px -10px;
    border-radius: 4px;
    padding: 8px 16px;
    display: block;
    width: 100%;
    margin-top: 5px;
    border: 1px solid ${theme?.secondaryText};

    &:hover {
      border: 1px solid ${theme?.text};
    }

    ${hasError &&
    css`
      border: 1px solid red;
    `}
  `
);

export const TextArea = styled('textarea')(
  ({ theme, hasError }: { theme?: ThemeType; hasError: boolean }) => css`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px -10px;
    display: block;
    width: 100%;
    padding: 8px 16px;
    margin-top: 5px;
    border-radius: 4px;
    resize: unset;
    font-family: inherit;
    border: 1px solid ${theme?.secondaryText};

    &:hover {
      border: 1px solid ${theme?.text};
    }

    ${hasError &&
    css`
      border: 1px solid red;
    `}
  `
);

export const ButtonWrapper = styled('div')(
  css`
    margin-top: 10px;
    width: 100%;

    button {
      width: 100%;
    }
  `
);

export const LikedArticle = styled('div')(
  css`
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
  `
);

export const SubmittedWrapper = styled('div')(
  ({ theme }: { theme?: ThemeType }) => css`
    max-width: 630px;
    background: ${theme?.commentBgColor};
    color: ${theme?.text};
    padding: 20px;
    box-shadow: 0 1px 3px 0 ${theme?.lightGreyShadow}, 0 0 0 1px ${theme?.lightGreyShadow};
    border-radius: 4px;
    margin: 10px auto;

    h5 {
      margin: 0;
      font-size: 1.5em;
    }

    p {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      max-width: 98%;
    }
  `
);

export const Wrapper = styled('section')(
  ({ theme }: { theme?: ThemeType }) => css`
    max-width: 630px;
    background: ${theme?.commentBgColor};
    box-shadow: 0 1px 3px 0 ${theme?.lightGreyShadow}, 0 0 0 1px ${theme?.lightGreyShadow};
    padding: 15px;
    border-radius: 4px;
    margin: 15px auto;

    @media (max-width: 768px) {
      max-width: 98%;
    }
  `
);

export const Container = styled('div')(
  css`
    display: flex;
    align-items: center;
  `
);

export const Avatar = styled('div')(
  ({ theme }: { theme?: ThemeType }) => css`
    background: ${theme?.text};
    color: ${theme?.body};
    min-height: 50px;
    min-width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: start;
    border: 1px solid ${theme?.lightGreyShadow};
    border-radius: 50%;
    font-size: 1.5em;
    font-weight: bold;
    user-select: none;
  `
);

export const CommentContent = styled('div')(
  css`
    margin-left: 20px;
    width: calc(100% - 70px);
  `
);

export const CommentHeader = styled('div')(
  css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 5px;
  `
);

export const CommentName = styled('p')(
  css`
    margin: 0;
    text-transform: capitalize;
    font-weight: bold;
  `
);

export const CommentDate = styled('p')(
  ({ theme }: { theme?: ThemeType }) => css`
    margin: 0;
    color: ${theme?.secondaryText};
  `
);

export const CommentText = styled('p')(
  css`
    margin: 0px;
    line-height: 1.4;
    overflow-wrap: break-word;
  `
);
