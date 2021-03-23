import styled from '@emotion/styled';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { ANIMATION, SPACER, ThemeType } from '../../constants';
import { containerStyles, ContainerType } from '../container/style';
import { setThemeLineHeight } from '../../utils/themeStyles';

export interface BaseIconWrapperStylesProps {
  buttonType?: 'primary' | 'secondary';
  optionType?: 'radio' | 'checkbox';
  selected: boolean;
  theme: ThemeType;
}

const getOptionTypeStyles = (
  optionType: BaseIconWrapperStylesProps['optionType'],
  theme: ThemeType,
) =>
  optionType === 'checkbox'
    ? `border-radius: ${theme.BORDER_RADIUS.small};`
    : 'border-radius: 50%';

const getTypeColor = (
  buttonType: BaseIconWrapperStylesProps['buttonType'],
  theme: ThemeType,
) => {
  if (buttonType === 'secondary') {
    return theme.COLORS.secondary;
  }

  return theme.COLORS.primary;
};

export const ClickableContainer = styled.button<{
  borderRadius?: string;
  containerType: ContainerType;
}>`
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ?? theme.BORDER_RADIUS.small};
  ${({ containerType, theme }) => containerStyles(theme, containerType)};
  padding: ${SPACER.large};
  margin-bottom: ${SPACER.medium};
  width: 100%;
  text-align: left;

  :focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focus};
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
  theme,
}: BaseIconWrapperStylesProps) => `
  border: 1px solid;
  border-color: ${theme.COLORS.primary};
  background: ${theme.COLORS.white};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  transition: all ${ANIMATION.defaultTiming};

  ${getOptionTypeStyles(optionType, theme)};

  svg {
    opacity: 0;
    transition: all ${ANIMATION.defaultTiming};
  }

  ${
    selected
      ? `
    background: ${getTypeColor(buttonType, theme)};
    border-color: ${getTypeColor(buttonType, theme)};

    svg {
      opacity: 1;
      color: ${theme.COLORS.white};
      fill: ${theme.COLORS.white};
    }
  `
      : ''
  }
`;

export const CheckmarkWrapper = styled.div<
  Omit<BaseIconWrapperStylesProps, 'theme'>
>`
  ${({ buttonType, optionType, selected, theme }) =>
    getBaseIconWrapperStyles({
      buttonType,
      optionType,
      selected,
      theme,
    })}
`;

export const IconWrapper = styled.div<
  Omit<BaseIconWrapperStylesProps, 'theme'>
>`
  ${({ buttonType, optionType, selected, theme }) =>
    getBaseIconWrapperStyles({
      buttonType,
      optionType,
      selected,
      theme,
    })}
  width: 48px;
  height: 48px;

  svg {
    opacity: 1;
    color: ${({ theme }) => theme.COLORS.primary};
    fill: ${({ theme }) => theme.COLORS.primary};
  }

  ${({ selected, theme }) =>
    selected &&
    `
      svg {
        color: ${theme.COLORS.white};
        fill: ${theme.COLORS.white};
      }
    `};
`;

export const TextContainer = styled.div`
  margin-left: ${SPACER.medium};
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.COLORS.primaryTint1};
  line-height: ${({ theme }) => setThemeLineHeight(theme, '1.5')};
`;

export const SubText = styled.div`
  ${({ theme }) => TYPOGRAPHY_STYLE.caption(theme)}
  line-height: ${({ theme }) => setThemeLineHeight(theme, '1.5')};
`;
