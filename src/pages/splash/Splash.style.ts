import styled from 'styled-components';

const logoWrapperStyles = styled.div`
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const screenStyles = styled.div`
  background: ${({ theme }) => theme.text};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  animation: grow 5.5s forwards;

  @keyframes grow {
    0% {
      transform: scale(0);
    }
    10% {
      transform: scale(1);
      border-radius: 0%;
      height: 100%;
      width: 100%;
    }
    90% {
      transform: scale(1);
      border-radius: 0%;
      height: 100%;
      width: 100%;
    }
    100% {
      transform: scale(0);
      transform-origin: 50% 50%;
      border-radius: 100%;
    }
  }
`;

/**
 * Component style declarations
 */
export const LogoWrapper = logoWrapperStyles;
export const Screen = screenStyles;
