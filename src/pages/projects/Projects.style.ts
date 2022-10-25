import styled from 'styled-components';

const sectionWrapperStyles = styled.section`
  display: flex;

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

const buttonWrapperStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const cardsSectionStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 100%;
`;

const cardStyles = styled.article`
  background: ${({ theme }) => theme.highlight};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  padding: 2rem;
  cursor: pointer;
  width: 48%;
  margin: 1%;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 15px 0;
  }
`;

const projectNameStyles = styled.h5`
  color: ${({ theme }) => theme.text};
  font-size: 1.5em;
  font-weight: bold;
  margin: 0px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.25em;
  }
`;

const projectDescStyles = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.25em;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const toolsStyles = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
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
export const ButtonWrapper = buttonWrapperStyles;
export const CardsSection = cardsSectionStyles;
export const Card = cardStyles;
export const ProjectName = projectNameStyles;
export const ProjectDesc = projectDescStyles;
export const Tools = toolsStyles;
