import styled, { keyframes, css } from 'react-emotion';

const fadeIn = keyframes`
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }

  25% {
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const FadeInContainer = styled.div`
  animation: ${fadeIn} 500ms ease-in-out;
`;

const opacityIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const OpacityInContainer = styled.div`
  animation: ${opacityIn} ${({ speed }) => speed || '500ms'} ease-in-out;
`;

export const opacityInEffect = css`
  animation: ${opacityIn} 500ms ease-in-out;
`;
