import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ isSecondSection }: { isSecondSection?: boolean }) =>
    isSecondSection ? '100px' : '0'};

  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: ${({ isSecondSection }: { isSecondSection?: boolean }) =>
      isSecondSection ? '50px' : '0'};
  }
`;

export const ImgWrapper = styled.div`
  align-items: center;
  justify-content: center;

  & > * {
    max-width: 100%;
    height: auto;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.div`
  text-align: center;
  align-self: center;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3.5em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

export const SubHeader = styled.span`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.25em;
  line-height: 1.5;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1em;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
