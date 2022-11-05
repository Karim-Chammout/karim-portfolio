import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  align-items: center;

  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */

  & > * {
    max-width: 95%;
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
  margin-top: 100px;
  width: 100%;
`;

export const Card = styled.article`
  border-radius: 16px;
  background: ${({ imgurl }: { imgurl: string }) => `url(${imgurl})`} no-repeat top center/cover;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  cursor: pointer;
  overflow: hidden;
  width: 30%;
  height: 350px;
  display: flex;
  align-items: flex-end;
  margin: calc(5% / 3);
  position: relative;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;

    .content_hover {
      transform: translateY(0);
    }
  }

  @media (max-width: 990px) {
    width: 47%;
    margin: 1.5%;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 15px 0;
  }
`;

export const Content = styled.article`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  padding: 20px;
  border-top-left-radius: 20px;
  transform: translateY(46%);
  transition: transform 0.3s;

  @media (max-width: 990px) {
    transform: translateY(48%);
  }

  @media (max-width: 768px) {
    transform: translateY(38%);
  }

  &::before {
    content: '';
    position: absolute;
    top: -52px;
    right: -48px;
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 50%;
    box-shadow: inset -48px -48px ${({ theme }) => theme.white};
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
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
