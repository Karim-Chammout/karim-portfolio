import styled, { css } from 'styled-components';

export const SectionWrapper = styled.div`
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

export const BlogTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 2.5em;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75em;
  }
`;

export const BlogDesc = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.5em;
  line-height: 1.4;
  margin: 15px 0;

  @media (max-width: 768px) {
    font-size: 1em;
    margin: 10px 0;
  }
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const AuthorImg = styled.img`
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

export const AuthorName = styled.p`
  margin: 10px 0;
  font-weight: bold;
  font-style: italic;
`;

export const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;
    transition: 0.3s ease-in-out;
    scale: 1.005;
  }
`;

export const PortableStyles = styled.div`
  margin-top: 50px;

  & > p {
    font-size: 1.25em;
    line-height: 1.6;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
`;

export const StyledForm = styled.form`
  padding: 5px;
  max-width: 350px;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1.25em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.secondaryText};
  margin: 50px 0;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin: 10px 0;
`;

export const Input = styled.input`
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

  ${({ hasError }: { hasError: boolean }) =>
    hasError &&
    css`
      border: 1px solid red;
    `}
`;

export const TextArea = styled.textarea`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px -10px;
  display: block;
  width: 100%;
  padding: 8px 16px;
  margin-top: 5px;
  border-radius: 4px;
  resize: unset;
  font-family: inherit;
  border: 1px solid ${({ theme }) => theme.secondaryText};

  &:hover {
    border: 1px solid ${({ theme }) => theme.text};
  }

  ${({ hasError }: { hasError: boolean }) =>
    hasError &&
    css`
      border: 1px solid red;
    `}
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  width: 100%;

  button {
    width: 100%;
  }
`;

export const LikedArticle = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
`;

export const SubmittedWrapper = styled.div`
  max-width: 630px;
  background: ${({ theme }) => theme.success};
  color: ${({ theme }) => theme.white};
  padding: 20px;
  border-radius: 4px;
  margin: auto;

  @media (max-width: 768px) {
    max-width: 98%;
  }
`;

export const Wrapper = styled.section`
  max-width: 630px;
  background: hsl(198, 100%, 92%);
  box-shadow: 0 1px 3px 0 lightGrey, 0 0 0 1px lightGrey;
  padding: 15px;
  border-radius: 4px;
  margin: 15px auto;

  @media (max-width: 768px) {
    max-width: 98%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  background: ${({ theme }) => theme.text};
  color: #edf9fe;
  min-height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: start;
  border: 1px solid #7f8daa;
  border-radius: 50%;
  font-size: 1.5em;
  font-weight: bold;
  user-select: none;
`;

export const CommentContent = styled.div`
  margin-left: 20px;
  width: calc(100% - 70px);
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const CommentName = styled.p`
  margin: 0;
  text-transform: capitalize;
  font-weight: bold;
`;

export const CommentDate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.secondaryText};
`;

export const CommentText = styled.p`
  margin: 0px;
  line-height: 1.4;
  overflow-wrap: break-word;
`;
