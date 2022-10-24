import styled from 'styled-components';

const wrapperStyles = styled.div`
  margin: 6rem 0 2rem 0;
`;

const textStyles = styled.p`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryText};
`;

const nameStyles = styled.span`
  font-weight: 900;
  font-style: italic;
`;

/**
 * Component style declarations
 */
export const Wrapper = wrapperStyles;
export const Text = textStyles;
export const Name = nameStyles;
