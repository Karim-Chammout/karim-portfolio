import styled from 'styled-components';

const wrapperStyles = styled.div`
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
`;

const contentStyles = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const headingStyles = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3em;

  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center;
  }
`;

const textStyles = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.5em;
  line-height: 1.6;
  margin-right: 40px;

  @media (max-width: 768px) {
    font-size: 1.25em;
    line-height: 1.4;
    margin-right: 0;
    text-align: center;
  }
`;

const imageWrapperStyles = styled.div`
  flex: 1;
  & > * {
    max-width: 100%;
    height: auto;
  }
`;

const socialMediaWrapperStyles = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const buttonWrapperStyles = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

/**
 * Component style declarations
 */
export const Wrapper = wrapperStyles;
export const Content = contentStyles;
export const H1 = headingStyles;
export const Text = textStyles;
export const ImageWrapper = imageWrapperStyles;
export const SocialMediaWrapper = socialMediaWrapperStyles;
export const ButtonWrapper = buttonWrapperStyles;
