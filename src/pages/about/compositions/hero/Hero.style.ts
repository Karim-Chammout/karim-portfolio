import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const Content = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3em;

  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center;
  }
`;

export const Text = styled.p`
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

export const ImageWrapper = styled.div`
  flex: 1;
  & > * {
    max-width: 100%;
    height: auto;
  }
`;

export const SocialMediaWrapper = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
