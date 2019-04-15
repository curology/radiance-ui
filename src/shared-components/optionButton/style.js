import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { COLORS, ANIMATION, SPACING } from '../../constants';

const getOptionTypeStyles = optionType => {
  if (optionType === 'checkbox') {
    return css`
      border-radius: 4px;
    `;
  }
  return css`
    border-radius: 50%;
  `;
};

const getStyleTypeColor = styleType => {
  if (styleType === 'secondary') {
    return COLORS.secondary;
  }
  return COLORS.primary;
};

export const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const getBaseIconWrapperStyles = ({ selected, optionType, styleType }) => css`
  border: 2px solid;
  border-color: ${getStyleTypeColor(styleType)};
  background: ${COLORS.white};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: all ${ANIMATION.defaultTiming};

  ${getOptionTypeStyles(optionType)};

  svg {
    opacity: 0;
    transition: all ${ANIMATION.defaultTiming};
  }

  ${selected &&
    css`
      background: ${getStyleTypeColor(styleType)};

      svg {
        opacity: 1;
        color: ${COLORS.white};
        fill: ${COLORS.white};
      }
    `};
`;

export const CheckmarkWrapper = styled.div`
  ${props => getBaseIconWrapperStyles(props)};
`;

export const IconWrapper = styled.div`
  ${props => getBaseIconWrapperStyles(props)};
  width: 48px;
  height: 48px;

  svg {
    opacity: 1;
    color: ${props => getStyleTypeColor(props.styleType)};
    fill: ${props => getStyleTypeColor(props.styleType)};
  }

  ${({ selected }) =>
    selected &&
    css`
      svg {
        color: ${COLORS.white};
        fill: ${COLORS.white};
      }
    `};
`;

export const Text = styled.p`
  color: ${props => getStyleTypeColor(props.styleType)};
  margin-left: ${SPACING.small};
`;
