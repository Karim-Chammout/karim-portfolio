import styled from 'styled-components';

const wrapperStyles = styled.div`
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};
  border: solid 1px ${({ theme }) => theme.text};
  border-radius: 50%;
  padding: 1em 1.1em;
  z-index: 999;
  visibility: hidden;
  position: fixed;
  bottom: 1.2rem;
  right: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
  }
`;

/**
 * Component style declarations
 */
export const Wrapper = wrapperStyles;
