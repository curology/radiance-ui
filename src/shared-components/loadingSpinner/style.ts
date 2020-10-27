import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const appPreloader = (translateX: string) => keyframes`
  0% { opacity: 0; transform: translate3d(${translateX}, 0, 0) }
  50% { opacity: 1; transform: translate3d(0, 0, 0) }
  100% { opacity: 0; transform: translate3d(-${translateX}, 0, 0) }
`;

export const LoadingSpinnerContainer = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: ${props => props.bgColor};
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Dot = styled.span<{
  color: string;
  translateX: string;
  duration: number;
  size: string;
}>`
  display: block;
  height: ${props => props.size};
  width: ${props => props.size};

  background-color: ${props => props.color};
  border-radius: 50%;
  opacity: 0;

  animation-name: ${props => appPreloader(props.translateX)};
  animation-duration: ${props => props.duration}s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &:nth-of-type(1) {
    animation-delay: ${props => (-props.duration * 3) / 4}s;
  }

  &:nth-of-type(2) {
    animation-delay: ${props => -props.duration / 2}s;
  }

  &:nth-of-type(3) {
    animation-delay: ${props => -props.duration / 4}s;
  }
`;
