import styled from 'styled-components';

import { ThemeType } from '../../../../theme';

const cardContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const cardStyles = styled.article`
  color: rgb(88, 96, 105);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  padding: 2rem;
  width: 48%;
  margin: 0.8%;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.highlight};
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;
  }
  @media (max-width: 768px) {
    .blog-card-div {
      width: 80%;
      margin: 20px auto;
    }
  }
`;

/**
 * Component style declarations
 */
export const CardContainer = cardContainerStyles;
export const Card = cardStyles;
