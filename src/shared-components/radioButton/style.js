import styled, { css } from 'react-emotion';

import {
  COLORS,
  SPACING,
  ANIMATION,
  BOX_SHADOWS,
} from '../../constants';

export const RadioContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const OuterContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  :focus {
    outline: none;
    ${RadioContainer} {
      border-radius: 100%;
      box-shadow: ${BOX_SHADOWS.focusSecondary};
    }
  }
`;

export const radioIcon = css`
  cursor: pointer;
  fill: currentColor;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const primaryRadioStyle = checked => css`
  background-color: ${checked ? COLORS.primary : 'transparent'};
  border-color: ${COLORS.primary};
`;

const secondaryRadioStyle = checked => css`
  background-color: ${checked ? COLORS.secondary : 'transparent'};
  border-color: ${checked ? COLORS.secondary : COLORS.primary};
`;

export const Radio = styled.div`
  align-items: center;
  appearance: none;
  border-radius: 100%;
  border: 2px solid;
  cursor: pointer;
  display: flex;
  height: ${SPACING.medium};
  justify-content: center;
  transition: background-color ${ANIMATION.defaultTiming};
  width: ${SPACING.medium};

  ${({ type, checked }) => {
    switch (type) {
      case 'primary':
        return primaryRadioStyle(checked);
      case 'secondary':
        return secondaryRadioStyle(checked);
      default:
        return primaryRadioStyle(checked);
    }
  }}

  &:active,
  &:focus {
    outline: none;
  }
`;

export const TextContainer = styled.p`
  margin-left: ${SPACING.small};
  margin-top: ${SPACING.xxsmall};
  min-width: 125px;
  text-align: left;
`;
