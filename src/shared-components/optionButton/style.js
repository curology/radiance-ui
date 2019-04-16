import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { COLORS, ANIMATION, SPACING, BOX_SHADOWS } from '../../constants';
import Container from '../container';

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

const getTypeColor = type => {
  if (type === 'secondary') {
    return COLORS.secondary;
  }
  return COLORS.primary;
};

export const ClickableContainer = styled(Container)`
  padding: ${SPACING.base};

  :focus {
    outline: none;
    box-shadow: ${BOX_SHADOWS.focusSecondary};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const getBaseIconWrapperStyles = ({ selected, optionType, type }) => css`
  border: 2px solid;
  border-color: ${getTypeColor(type)};
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
      background: ${getTypeColor(type)};

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
    color: ${props => getTypeColor(props.type)};
    fill: ${props => getTypeColor(props.type)};
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
  color: ${COLORS.purple85};
  margin-left: ${SPACING.small};
`;
