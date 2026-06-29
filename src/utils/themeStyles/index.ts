/**
 *  Any conditional style based on theme.__type should be on this file
 */
import type { ThemeColors, ThemeType } from '../../constants';

type ThemeName = ThemeType['__type'];

/**
 * This map is the single source of truth for that split and is keyed on
 * every `__type`, so adding a new theme to the union becomes a compile
 * error here until it is explicitly classified — rather than silently
 * falling into a default branch at runtime.
 * It seems the themes COULD be grouped into two families, but the secondaryRebrand
 * theme will have changes that will split it from secondary. Tertiary seems to be
 * in the same family as primary, but we keep it separate for now in case we want
 * to make changes to that theme that will split it from primary, or there's another
 * use of it that i'm not aware of.
 */
const THEME_FAMILY: Record<
  ThemeName,
  'primary' | 'secondary' | 'tertiary' | 'secondaryRebrand'
> = {
  primary: 'primary',
  tertiary: 'tertiary',
  secondary: 'secondary',
  secondaryRebrand: 'secondaryRebrand',
};

export const primaryButtonFontColor = (theme: ThemeType) =>
  THEME_FAMILY[theme.__type] === 'primary' ||
  THEME_FAMILY[theme.__type] === 'tertiary'
    ? theme.COLORS.white
    : theme.COLORS.primary;

export const primaryButtonBackgroundColor = (
  theme: ThemeType,
  buttonColor: ThemeColors,
) => {
  if (
    buttonColor === theme.COLORS.primary &&
    (THEME_FAMILY[theme.__type] === 'secondary' ||
      THEME_FAMILY[theme.__type] === 'secondaryRebrand')
  ) {
    return theme.COLORS.secondary;
  }

  // If buttonColor is not COLORS.primary then it is custom, return as is
  return buttonColor;
};

export const primaryButtonLoadingBackgroundColor = (theme: ThemeType) =>
  THEME_FAMILY[theme.__type] === 'primary' ||
  THEME_FAMILY[theme.__type] === 'tertiary'
    ? theme.COLORS.white
    : theme.COLORS.primary;

/**
 * We use theme.FONTS.baseFont for all primary styles, but use a
 * different secondary font for Display, Heading, and Title styles
 */
export const setSecondaryHeadingFont = (theme: ThemeType) =>
  THEME_FAMILY[theme.__type] === 'secondary' ||
  THEME_FAMILY[theme.__type] === 'secondaryRebrand'
    ? `font-family: ${theme.FONTS.headerFont};`
    : '';

export const setButtonStyleFontWeight = (theme: ThemeType) =>
  THEME_FAMILY[theme.__type] === 'primary' ||
  THEME_FAMILY[theme.__type] === 'tertiary'
    ? `font-weight: ${theme.TYPOGRAPHY.fontWeight.bold};`
    : '';

export const setThemeLineHeight = (
  theme: ThemeType,
  primaryLineHeight: string | number,
) =>
  THEME_FAMILY[theme.__type] === 'secondary' ||
  THEME_FAMILY[theme.__type] === 'secondaryRebrand'
    ? '1.4'
    : primaryLineHeight;

export const setThemeFontWeight = (theme: ThemeType) =>
  THEME_FAMILY[theme.__type] === 'secondary' ||
  THEME_FAMILY[theme.__type] === 'secondaryRebrand'
    ? theme.TYPOGRAPHY.fontWeight.normal
    : theme.TYPOGRAPHY.fontWeight.bold;

export const applyPrimaryThemeVerticalOffset = (
  theme: ThemeType,
  offset = '1',
) =>
  THEME_FAMILY[theme.__type] === 'primary' ||
  THEME_FAMILY[theme.__type] === 'tertiary'
    ? `transform: translateY(${offset}px);`
    : '';
