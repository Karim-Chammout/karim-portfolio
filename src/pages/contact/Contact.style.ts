import styled from 'styled-components';

const sectionWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ isSecondSection }: { isSecondSection?: boolean }) =>
    isSecondSection ? '100px' : '0'};

  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: ${({ isSecondSection }: { isSecondSection?: boolean }) =>
      isSecondSection ? '50px' : '0'};
  }
`;

const imgWrapperStyles = styled.div`
  align-items: center;
  justify-content: center;

  & > * {
    max-width: 100%;
    height: auto;
  }
`;

const imgStyles = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`;

const contactInfoStyles = styled.div`
  text-align: center;
  align-self: center;
`;

const h1Styles = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3.5em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const subHeaderStyles = styled.span`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.25em;
  line-height: 1.5;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1em;
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

const buttonWrapperStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const infoWrapperStyles = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const h4Styles = styled.h4`
  color: ${({ theme }) => theme.text};
  margin: 0 0 5px 0;
  font-size: 2em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

/**
 * Component style declarations
 */
export const SectionWrapper = sectionWrapperStyles;
export const ImgWrapper = imgWrapperStyles;
export const Image = imgStyles;
export const ContactInfo = contactInfoStyles;
export const H1 = h1Styles;
export const SubHeader = subHeaderStyles;
export const Text = textStyles;
export const ButtonWrapper = buttonWrapperStyles;
export const InfoWrapper = infoWrapperStyles;
export const H4 = h4Styles;
