import styled from '@emotion/styled';
import { css } from '@emotion/core';
import tinycolor from 'tinycolor2';

import { ANIMATION, COLORS } from '../../../../constants';
import { ButtonBase } from '../../style';
import { textColorsAssociatedWithColors } from '../../constants';

const multiStyles = `
  justify-content: space-between;
  max-width: 120px;
  margin: 0 auto;
`;

export const RoundButtonContainer = styled.div`
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
    css`
      &:hover {
        transition: all ${ANIMATION.defaultTiming} ease-in-out;
        opacity: 1;
      }
    `};

  & > svg {
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
    transition: opacity ${ANIMATION.defaultTiming};
    margin: 0 auto;
  }
`;

export const roundButtonLoader = disabled => css`
  width: 36px;
  margin: -3px -3px 0 0;
  ${disabled &&
    `
    & span {
      background-color: ${COLORS.white};
    }
  `};
`;

export const RoundButtonText = (color, textColor) => css`
  color: ${buttonTextColor(color, textColor)};
  margin: 10px 0;
`;

/**
 * Given a color as an argument,
 * determine an alternate color for pairing
 * @param  string color   the current color name of the round button (e.g purple, primary, etc.)
 * @return string         hex string of the alternate color (e.g. #efefef)
 */
const determineAlternateTextColor = color => {
  // create a lighter and darker version of the text
  const lighterVersion = tinycolor(COLORS[color])
    .lighten(10)
    .desaturate(50)
    .toHexString();
  const darkerVersion = tinycolor(COLORS[color])
    .darken(10)
    .desaturate(50)
    .toHexString();

  // loose readability contrast level
  // https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html
  const contrastLevel = { level: 'AA', size: 'large' };

  const lighterIsReadable = tinycolor.isReadable(
    COLORS.defaultBackground,
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
const buttonTextColor = (color, textColor) => {
  if (textColor !== '') {
    return textColor;
  }

  return textColorsAssociatedWithColors[color]
    ? textColorsAssociatedWithColors[color].tint1
    : determineAlternateTextColor(color);
};
