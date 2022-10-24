import styled from 'styled-components';

const iconWrapperStyles = styled.span`
  img {
    background-color: ${({ backgroundColor }: { backgroundColor: string }) => backgroundColor};
    margin: 0 5px;
    padding: 8px;
    border-radius: 25%;
  }
  img:hover {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

/**
 * Component style declarations
 */
export const IconWrapper = iconWrapperStyles;
