import styled from 'styled-components';

const containerStyles = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 738px;
  }
  @media screen and (min-width: 990px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1170px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 1370px;
  }
`;

/**
 * Component style declarations
 */
export const Container = containerStyles;
