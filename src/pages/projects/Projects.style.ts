import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;

  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    max-width: 100%;
    height: auto;
  }
`;

export const InfoWrapper = styled.div`
  text-align: center;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3.5em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0 20px 20px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 100%;
`;

export const Card = styled.article`
  background: ${({ theme }) => theme.highlight};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  border-radius: 4px;
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

export const ProjectName = styled.h5`
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

export const ProjectDesc = styled.p`
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

export const Tools = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
