import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.article`
  border-radius: 4px;
  background: ${({ theme }) => theme.highlight};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  padding: 2rem;
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
    font-size: 1em;
  }
`;

export const Tags = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
