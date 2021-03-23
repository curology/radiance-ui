import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { ANIMATION, PROGRESS_BAR_STATUS, ThemeType } from '../../constants';

import { ProgressBarStatusType } from '.';

const loadingProgression = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(-5%); }
`;

export const OuterContainer = styled.div<{
  backgroundColor: string;
  barHeight: number;
  status: ProgressBarStatusType;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.backgroundColor};
  overflow: hidden;
  transition: opacity ${ANIMATION.defaultTiming} ease-in-out 500ms;
  width: 100%;
  z-index: 2;
  height: ${(props) => `${props.barHeight}px`};

  ${({ status }) =>
    (status === PROGRESS_BAR_STATUS.success ||
      status === PROGRESS_BAR_STATUS.error) &&
    `
      opacity: 0;
      transition: opacity ${ANIMATION.defaultTiming} ease-in-out 500ms;
    `};
`;

const getStatusStyles = (status: ProgressBarStatusType, theme: ThemeType) => {
  const baseStyles = `
    transform: translateX(0);
    transition: transform ${ANIMATION.defaultTiming} ease-in-out;
  `;

  if (status === PROGRESS_BAR_STATUS.error) {
    return `
      ${baseStyles};
      background: ${theme.COLORS.error};
    `;
  }

  return baseStyles;
};

export const InnerBar = styled.div<{
  barColor: string;
  barHeight: number;
  loadingTime: string;
  status: ProgressBarStatusType;
}>`
  position: absolute;
  width: 100%;
  height: ${(props) => `${props.barHeight}px`};
  background-color: ${(props) => props.barColor};
  animation: ${loadingProgression} ${({ loadingTime }) => loadingTime} ease-in;
  transform: translateX(-5%);
  transition: transform ${ANIMATION.defaultTiming} ease-in-out;

  ${({ status, theme }) => getStatusStyles(status, theme)}
`;
