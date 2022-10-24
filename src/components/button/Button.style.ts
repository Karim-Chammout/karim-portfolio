import styled from 'styled-components';

const linkButtonStyles = styled.a`
  background-color: ${({ theme }) => theme.text};
  border: solid 1px ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  font-weight: 500;
  width: max-content;
  padding: 12px 22px;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 18px;
  letter-spacing: 2px;
  :hover {
    transition: ease-in 0.2s;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 18px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

/**
 * Component style declarations
 */
export const LinkButton = linkButtonStyles;
