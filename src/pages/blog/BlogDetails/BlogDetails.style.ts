import styled from 'styled-components';

const sectionWrapperStyles = styled.div`
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
`;

const blogTitleStyles = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 2.5em;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75em;
  }
`;

const blogDescStyles = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.5em;
  line-height: 1.4;
  margin: 15px 0;

  @media (max-width: 768px) {
    font-size: 1em;
    margin: 10px 0;
  }
`;

const authorSectionStyles = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const authorImgStyles = styled.img`
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
`;

const authorNameStyles = styled.p`
  margin: 10px 0;
  font-weight: bold;
`;

const imgStyles = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;
    transition: 0.3s ease-in-out;
    scale: 1.01;
  }
`;

const portableStylesStyles = styled.div`
  margin-top: 50px;

  & > p {
    font-size: 1.25em;
    line-height: 1.7;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
`;

/**
 * Component style declarations
 */
export const SectionWrapper = sectionWrapperStyles;
export const BlogTitle = blogTitleStyles;
export const BlogDesc = blogDescStyles;
export const AuthorSection = authorSectionStyles;
export const AuthorImg = authorImgStyles;
export const AuthorName = authorNameStyles;
export const Img = imgStyles;
export const PortableStyles = portableStylesStyles;
