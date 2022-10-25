import styled from 'styled-components';

const wrapperStyles = styled.div`
  width: 100%;
  padding: 20px 10px;
  margin: 0px auto;
  margin-top: 4rem;
`;

const h1Styles = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3.5em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const h3Styles = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 2.75em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center;
  }
`;

const textStyles = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1em;
    text-align: center;
  }
`;

const skillWrapperStyles = styled.div`
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
`;

const imageWrapperStyles = styled.div`
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
`;

const contentWrapperStyles = styled.div`
  align-self: center;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0px;
    margin: 20px;
  }
`;

/**
 * Component style declarations
 */
export const Wrapper = wrapperStyles;
export const SkillWrapper = skillWrapperStyles;
export const ImgWrapper = imageWrapperStyles;
export const ContentWrapper = contentWrapperStyles;
export const H1 = h1Styles;
export const H3 = h3Styles;
export const Text = textStyles;
