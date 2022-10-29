import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 6rem 0 2rem 0;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryText};
`;

export const Name = styled.span`
  font-weight: 900;
  font-style: italic;

  &:hover {
    cursor: pointer;
  }
`;
