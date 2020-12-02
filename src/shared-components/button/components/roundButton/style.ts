import styled from '@emotion/styled';
import { css } from '@emotion/core';
import tinycolor from 'tinycolor2';

import { ANIMATION, ThemeColors, ThemeType } from '../../../../constants';
import { ButtonBase } from '../../style';
import { textColorsAssociatedWithColors } from '../../constants';

export { BaseButtonStylesTypes } from '../../style';

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

  ${({ isLoading, disabled }) =>
    !isLoading &&
    !disabled &&
    `
      &:hover {
        transition: all ${ANIMATION.defaultTiming} ease-in-out;
        opacity: 1;
      }
    `}

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
 * @param  string color   the current color name of the round button (e.g purple, primary, etc.)
 * @return string         hex string of the alternate color (e.g. #efefef)
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
    theme.COLORS.defaultBackground,
    lighterVersion,
    contrastLevel,
  );

  // prefer the lighter version unless its unreadable in context of our background
  return lighterIsReadable ? lighterVersion : darkerVersion;
};

/**
 * get the text color of the button
 * @param  string color       the current color name of the round button (e.g purple, primary, etc.)
 * @param  string textColor   custom override for the text color
 * @return string             hex string of the text color
 */
const buttonTextColor = (
  buttonColor: ThemeColors,
  textColor: string,
  theme: ThemeType,
) => {
  if (textColor !== '') {
    return textColor;
  }

  const tintedTextColor = textColorsAssociatedWithColors(theme)[buttonColor];

  return tintedTextColor
    ? tintedTextColor.tint1
    : determineAlternateTextColor(buttonColor, theme);
};

export const roundButtonTextStyles = (
  buttonColor: ThemeColors,
  textColor: string,
  theme: ThemeType,
) => css`
  color: ${buttonTextColor(buttonColor, textColor, theme)};
  margin: 10px 0;
`;
