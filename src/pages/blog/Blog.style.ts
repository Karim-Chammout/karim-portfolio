import styled from 'styled-components';

const sectionWrapperStyles = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;

  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const imgWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    max-width: 100%;
    height: auto;
  }
`;

const InfoWrapperStyles = styled.div`
  text-align: center;
`;

const h1Styles = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3.5em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const textStyles = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0 20px 20px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const noResultStyles = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;

  & > svg {
    width: 100%;
    height: 150px;
  }
`;

/**
 * Component style declarations
 */
export const SectionWrapper = sectionWrapperStyles;
export const ImgWrapper = imgWrapperStyles;
export const InfoWrapper = InfoWrapperStyles;
export const H1 = h1Styles;
export const Text = textStyles;
export const NoResultWrapper = noResultStyles;
