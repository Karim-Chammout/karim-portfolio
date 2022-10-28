import styled, { css } from 'styled-components';

const sharedStyles = css`
  background-color: ${({ theme }) => theme.text};
  border: solid 1px ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  font-weight: 500;
  width: max-content;
  padding: 12px 22px;
  border-radius: 6px;
  cursor: pointer;
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

const buttonStyles = styled.button`
  ${sharedStyles}
  ${({ disabled }: { disabled?: boolean }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.secondaryText};
      border: solid 1px ${({ theme }) => theme.secondaryText};
      pointer-events: none;
      user-selectable: none;
    `};
`;

const linkButtonStyles = styled.a`
  ${sharedStyles}
`;

/**
 * Component style declarations
 */
export const StyledButton = buttonStyles;
export const LinkButton = linkButtonStyles;
