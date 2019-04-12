import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import { COLORS, ANIMATION, PROGRESS_BAR_STATUS } from '../../constants';

const loadingProgression = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(-5%); }
`;

export const OuterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.backgroundColor};
  overflow: hidden;
  transition: opacity ${ANIMATION.defaultIming} ease-in-out 500ms;
  width: 100%;
  z-index: 2;
  height: ${props => `${props.height}px`};

  ${({ status }) =>
    [PROGRESS_BAR_STATUS.success, PROGRESS_BAR_STATUS.error].includes(status) &&
    css`
      opacity: 0;
      transition: opacity ${ANIMATION.defaultIming} ease-in-out 500ms;
    `};
`;

const getStatusStyles = status => {
  const baseStyles = css`
    transform: translateX(0);
    transition: transform ${ANIMATION.defaultIming} ease-in-out;
  `;

  if (status === PROGRESS_BAR_STATUS.error) {
    return css`
      ${baseStyles};
      background: ${COLORS.error};
    `;
  }

  return baseStyles;
};

export const InnerBar = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => `${props.height}px`};
  background-color: ${props => props.barColor};
  animation: ${loadingProgression} ${({ loadingTime }) => loadingTime} ease-in;
  transform: translateX(-5%);
  transition: transform ${ANIMATION.defaultIming} ease-in-out;

  ${({ status }) => getStatusStyles(status)};
`;
