import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled(Link)`
  border-radius: 16px;
  background: ${({ imgurl }: { imgurl: string }) => `url(${imgurl})`} no-repeat top center/cover;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  overflow: hidden;
  width: 30%;
  height: 350px;
  display: flex;
  align-items: flex-end;
  /* margin: 0 auto; */
  margin: calc(5% / 3);
  position: relative;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;

    .content_hover {
      transform: translateY(0);
    }
    .tag {
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.text} 0%,
        ${({ theme }) => theme.highlight} 35%,
        ${({ theme }) => theme.text} 100%
      );
      background-size: auto auto;
      background-clip: border-box;
      background-size: 200% auto;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textclip 2s linear infinite;
      padding: 5px;

      @keyframes textclip {
        to {
          background-position: 200% center;
        }
      }
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

export const LinkCard = styled(Link)`
  text-decoration: none;
`;

export const BlogName = styled.h5`
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

export const BlogDesc = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.25em;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 10px 0;

  @media (max-width: 768px) {
    -webkit-line-clamp: 1;
    font-size: 1em;
  }
`;

export const Tags = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Tag = styled.span`
  padding: 0 5px;
`;
