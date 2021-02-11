import styled from '@emotion/styled';
import { css } from '@emotion/react';
import tinycolor from 'tinycolor2';

import { ANIMATION, ThemeColors, ThemeType } from '../../../../constants';
import { ButtonBase } from '../../style';
import { textColorsAssociatedWithColors } from '../../constants';

const multiStyles = `
  justify-content: space-between;
  max-width: 120px;
  margin: 0 auto;
`;

export const RoundButtonContainer = styled.div<{ multi: boolean }>`
  display: flex;
  justify-content: center;
  align-items: start;

  ${({ multi }) => multi && multiStyles};
`;

export const RoundButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RoundButtonBase = styled(ButtonBase)`
  border-radius: 50%;
  max-width: unset;
  min-height: unset;
  min-width: unset;
  height: 48px;
  width: 48px;
  padding: 0;

  &:hover {
    ${({ isLoading, disabled }) =>
      !isLoading && !disabled
        ? `
        transition: all ${ANIMATION.defaultTiming} ease-in-out;
        opacity: 1;
          `
        : `
        transition: inherit;
        opacity: inherit;
          `}
  }

  & > svg {
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
    transition: opacity ${ANIMATION.defaultTiming};
    margin: 0 auto;
  }
`;

export const roundButtonLoader = (disabled: boolean, theme: ThemeType) => css`
  width: 36px;
  margin: -3px -3px 0 0;

  ${disabled &&
  `
    & span {
      background-color: ${theme.COLORS.white};
    }
  `}
`;

/**
 * Given a color as an argument,
 * determine an alternate color for pairing
 */
const determineAlternateTextColor = (
  buttonColor: ThemeColors,
  theme: ThemeType,
) => {
  // create a lighter and darker version of the text
  const lighterVersion = tinycolor(buttonColor)
    .lighten(10)
    .desaturate(50)
    .toHexString();
  const darkerVersion = tinycolor(buttonColor)
    .darken(10)
    .desaturate(50)
    .toHexString();

  // loose readability contrast level
  // https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html
  const contrastLevel: tinycolor.WCAG2Options = { level: 'AA', size: 'large' };

  const lighterIsReadable = tinycolor.isReadable(
    theme.COLORS.defaultLight,
    lighterVersion,
    contrastLevel,
  );

  // prefer the lighter version unless its unreadable in context of our background
  return lighterIsReadable ? lighterVersion : darkerVersion;
};

/**
 * get the text color of the button
 */
const buttonTextColor = (
  buttonColor: ThemeColors,
  theme: ThemeType,
  textColor?: ThemeColors,
) => {
  if (textColor) {
    return textColor;
  }

  const tintedTextColor = textColorsAssociatedWithColors(theme)[buttonColor];

  return tintedTextColor
    ? tintedTextColor.tint1
    : determineAlternateTextColor(buttonColor, theme);
};

export const roundButtonTextStyles = (
  buttonColor: ThemeColors,
  theme: ThemeType,
  textColor?: ThemeColors,
) => css`
  color: ${buttonTextColor(buttonColor, theme, textColor)};
  margin: 10px 0;
`;
