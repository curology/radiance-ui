import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import { COLORS, ANIMATION, PROGRESS_BAR_STATUS } from '../../constants';

import { ProgressBarStatusType } from '.';

const loadingProgression = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(-5%); }
`;

export const OuterContainer = styled.div<{
  backgroundColor: string;
  height: number;
  status: ProgressBarStatusType;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.backgroundColor};
  overflow: hidden;
  transition: opacity ${ANIMATION.defaultTiming} ease-in-out 500ms;
  width: 100%;
  z-index: 2;
  height: ${props => `${props.height}px`};

  ${({ status }) =>
    (status === PROGRESS_BAR_STATUS.success ||
      status === PROGRESS_BAR_STATUS.error) &&
    css`
      opacity: 0;
      transition: opacity ${ANIMATION.defaultTiming} ease-in-out 500ms;
    `};
`;

const getStatusStyles = (status: ProgressBarStatusType) => {
  const baseStyles = css`
    transform: translateX(0);
    transition: transform ${ANIMATION.defaultTiming} ease-in-out;
  `;

  if (status === PROGRESS_BAR_STATUS.error) {
    return css`
      ${baseStyles};
      background: ${COLORS.error};
    `;
  }

  return baseStyles;
};

export const InnerBar = styled.div<{
  height: number;
  barColor: string;
  loadingTime: string;
  status: ProgressBarStatusType;
}>`
  position: absolute;
  width: 100%;
  height: ${props => `${props.height}px`};
  background-color: ${props => props.barColor};
  animation: ${loadingProgression} ${({ loadingTime }) => loadingTime} ease-in;
  transform: translateX(-5%);
  transition: transform ${ANIMATION.defaultTiming} ease-in-out;

  ${({ status }) => getStatusStyles(status)};
`;
