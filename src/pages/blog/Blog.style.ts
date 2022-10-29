import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;

  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    max-width: 100%;
    height: auto;
  }
`;

export const InfoWrapper = styled.div`
  text-align: center;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3.5em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0 20px 20px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.secondaryText};
  border-radius: 4px;
`;

export const NoResultWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;

  & > svg {
    width: 100%;
    height: 150px;
  }
`;
