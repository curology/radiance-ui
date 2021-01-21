/**
 *  Any conditional style based on theme.__type should be on this file
 */
import { ThemeColors, ThemeType } from '../../constants';

export const primaryButtonFontColor = (theme: ThemeType) =>
  theme.__type === 'primary' ? theme.COLORS.white : theme.COLORS.primary;

export const primaryButtonBackgroundColor = (
  theme: ThemeType,
  buttonColor: ThemeColors,
) => {
  if (buttonColor === theme.COLORS.primary && theme.__type === 'secondary') {
    return theme.COLORS.secondary;
  }

  // If buttonColor is not COLORS.primary then it is custom, return as is
  return buttonColor;
};

export const primaryButtonLoadingBackgroundColor = (theme: ThemeType) =>
  theme.__type === 'primary' ? theme.COLORS.white : theme.COLORS.primary;

/**
 * We use theme.FONTS.baseFont for all primary styles, but use a
 * different secondary font for Display, Heading, and Title styles
 */
export const setSecondaryHeadingFont = (theme: ThemeType) =>
  theme.__type === 'secondary' ? `font-family: ${theme.FONTS.headerFont};` : '';

export const setButtonStyleFontWeight = (theme: ThemeType) =>
  theme.__type === 'primary'
    ? `font-weight: ${theme.TYPOGRAPHY.fontWeight.bold};`
    : '';

export const setThemeLineHeight = (
  theme: ThemeType,
  primaryLineHeight: string | number,
) => (theme.__type === 'secondary' ? '1.4' : primaryLineHeight);

export const setThemeFontWeight = (theme: ThemeType) =>
  theme.__type === 'secondary'
    ? theme.TYPOGRAPHY.fontWeight.normal
    : theme.TYPOGRAPHY.fontWeight.bold;
