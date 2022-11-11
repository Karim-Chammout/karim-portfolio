import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../theme';

const sharedStyles = ({ theme }: { theme?: ThemeType }) => css`
  background-color: ${theme?.text};
  border: solid 1px ${theme?.text};
  color: ${theme?.body};
  font-weight: 600;
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
    background-color: ${theme?.body};
    color: ${theme?.text};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 18px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const StyledButton = styled('button')(
  ({ theme, disabled }: { theme?: ThemeType; disabled?: boolean }) => css`
    ${disabled &&
    css`
      background-color: ${theme?.secondaryText};
      border: solid 1px ${theme?.secondaryText};
      pointer-events: none;
      user-selectable: none;
    `};
  `,
  sharedStyles
);

export const LinkButton = styled('a')`
  ${sharedStyles}
`;
