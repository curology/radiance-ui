import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS, ANIMATION, SPACER, BOX_SHADOWS } from '../../constants';
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
  padding: ${SPACER.large};
  margin-bottom: ${SPACER.medium};

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
  border: 1px solid;
  border-color: ${COLORS.primary};
  background: ${COLORS.white};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
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
      border-color: ${getTypeColor(type)};

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
    color: ${COLORS.primary};
    fill: ${COLORS.primary};
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

export const TextContainer = styled.div`
  margin-left: ${SPACER.medium};
`;

export const Text = styled.div`
  color: ${COLORS.purple85};
  line-height: 1.5;
`;

export const SubText = styled.div`
  ${TYPOGRAPHY_STYLE.caption};
  line-height: 1.5;
`;
