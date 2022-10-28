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

const portableStyles = styled.div`
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

const formStyles = styled.form`
  padding: 5px;
  max-width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const h5Styles = styled.h5`
  font-size: 1.25em;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const textStyles = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const hrStyles = styled.hr``;

const labelStyles = styled.label`
  display: block;
  width: 100%;
  margin: 10px 0;
`;

const spanStyles = styled.span`
  /* color: ${({ theme }) => theme.secondaryText}; */
`;

const inputStyles = styled.input`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px -10px;
  border-radius: 4px;
  padding: 8px 16px;
  display: block;
  width: 100%;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.secondaryText};

  &:hover {
    border: 1px solid ${({ theme }) => theme.text};
  }
`;

const textAreaStyles = styled.textarea`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px -10px;
  display: block;
  width: 100%;
  padding: 8px 16px;
  margin-top: 5px;
  border-radius: 4px;
  resize: unset;
  font-family: inherit;

  &:hover {
    border: 1px solid ${({ theme }) => theme.text};
  }
`;

const buttonWrapperStyles = styled.div`
  margin-top: 10px;
  width: 100%;

  button {
    width: 100%;
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
export const PortableStyles = portableStyles;
export const StyledForm = formStyles;
export const Text = textStyles;
export const H5 = h5Styles;
export const Hr = hrStyles;
export const Label = labelStyles;
export const Span = spanStyles;
export const Input = inputStyles;
export const TextArea = textAreaStyles;
export const ButtonWrapper = buttonWrapperStyles;
