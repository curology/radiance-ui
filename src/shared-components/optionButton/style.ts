import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import {
  COLORS, ANIMATION, SPACER, BOX_SHADOWS, 
} from '../../constants';
import { containerStyles, ContainerType } from '../container/style';

type BaseIconWrapperStylesProps = {
  buttonType?: 'primary' | 'secondary';
  optionType?: 'radio' | 'checkbox';
  selected?: boolean;
};

const getOptionTypeStyles = (
  optionType: BaseIconWrapperStylesProps['optionType'],
) => {
  if (optionType === 'checkbox') {
    return css`
      border-radius: 4px;
    `;
  }

  return css`
    border-radius: 50%;
  `;
};

const getTypeColor = (buttonType: BaseIconWrapperStylesProps['buttonType']) => {
  if (buttonType === 'secondary') {
    return COLORS.secondary;
  }

  return COLORS.primary;
};

export const ClickableContainer = styled.button<{
  borderRadius: string;
  containerType: ContainerType;
}>`
  border-radius: ${({ borderRadius }) => borderRadius};
  ${({ containerType }) => containerStyles(containerType)};
  padding: ${SPACER.large};
  margin-bottom: ${SPACER.medium};
  width: 100%;
  text-align: left;

  :focus {
    outline: none;
    box-shadow: ${BOX_SHADOWS.focus};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const getBaseIconWrapperStyles = ({
  buttonType,
  optionType,
  selected,
}: BaseIconWrapperStylesProps) => css`
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
    background: ${getTypeColor(buttonType)};
    border-color: ${getTypeColor(buttonType)};

    svg {
      opacity: 1;
      color: ${COLORS.white};
      fill: ${COLORS.white};
    }
  `};
`;

export const CheckmarkWrapper = styled.div<BaseIconWrapperStylesProps>`
  ${({ buttonType, optionType, selected }) =>
    getBaseIconWrapperStyles({ buttonType, optionType, selected })};
`;

export const IconWrapper = styled.div<BaseIconWrapperStylesProps>`
  ${({ buttonType, optionType, selected }) =>
    getBaseIconWrapperStyles({ buttonType, optionType, selected })};
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
  color: ${COLORS.primaryTint1};
  line-height: 1.5;
`;

export const SubText = styled.div`
  ${TYPOGRAPHY_STYLE.caption};
  line-height: 1.5;
`;
