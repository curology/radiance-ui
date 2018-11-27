import styled, { css } from 'react-emotion';
import {
  COLORS,
  SPACING,
  ANIMATION,
  TYPOGRAPHY_CONSTANTS,
} from 'radiance-ui/lib/constants';

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  cursor: pointer;
  margin-bottom: 20px;
`;

export const radioIconContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const radioIcon = css`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  fill: currentColor;
  cursor: pointer;
  z-index: 5;
`;

const primaryRadioButtonStyle = checked => css`
  background-color: ${checked ? COLORS.primary : 'transparent'};
  border-color: ${COLORS.primary};
`;

const secondaryRadioButtonStyle = checked => css`
  background-color: ${checked ? COLORS.secondary : 'transparent'};
  border-color: ${checked ? COLORS.secondary : COLORS.primary};
`;

export const RadioButtonStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${SPACING.medium};
  width: ${SPACING.medium};
  appearance: none;
  border: 2px solid;
  cursor: pointer;
  border-radius: 100%;
  transition: background-color ${ANIMATION.defaultTiming};

  ${({ type, checked }) => {
    switch (type) {
      case 'primary':
        return primaryRadioButtonStyle(checked);
      case 'secondary':
        return secondaryRadioButtonStyle(checked);
      default:
        return primaryRadioButtonStyle(checked);
    }
  }} &:active,
  &:focus {
    outline: none;
  }
`;

export const RadioButtonText = styled.p`
  color: ${({ checked }) => (checked ? COLORS.primary : COLORS.primaryTint1)};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.body}
  line-height: 1.7;
  margin-top: ${SPACING.xxsmall};
  margin-left: ${SPACING.small};
  min-width: 125px;
  transition: ${ANIMATION.defaultTiming};
`;
