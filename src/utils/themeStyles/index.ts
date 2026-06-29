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

export const setHeadingColor = (theme: ThemeType) =>
  THEME_FAMILY[theme.__type] === 'secondaryRebrand'
    ? theme.COLORS.secondary
    : theme.COLORS.primary;

export const primaryButtonFontColor = (theme: ThemeType) =>
  THEME_FAMILY[theme.__type] === 'primary' ||
  THEME_FAMILY[theme.__type] === 'tertiary' ||
  THEME_FAMILY[theme.__type] === 'secondaryRebrand'
    ? theme.COLORS.white
    : theme.COLORS.primary;

export const primaryButtonBackgroundColor = (
  theme: ThemeType,
  buttonColor: ThemeColors,
) => {
  // If buttonColor is not COLORS.primary then it is custom, return as is
  if (buttonColor !== theme.COLORS.primary) {
    return buttonColor;
  }

  if (THEME_FAMILY[theme.__type] === 'secondaryRebrand') {
    return theme.COLORS.backgroundDark;
  }

  if (THEME_FAMILY[theme.__type] === 'secondary') {
    return theme.COLORS.secondary;
  }

  return buttonColor;
};

export const primaryButtonLoadingBackgroundColor = (theme: ThemeType) =>
  THEME_FAMILY[theme.__type] === 'primary' ||
  THEME_FAMILY[theme.__type] === 'tertiary'
    ? theme.COLORS.white
    : theme.COLORS.primary;

export const setButtonBorderRadius = (theme: ThemeType) =>
  THEME_FAMILY[theme.__type] === 'secondaryRebrand'
    ? '360px'
    : theme.BORDER_RADIUS.small;
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
  THEME_FAMILY[theme.__type] === 'tertiary' ||
  THEME_FAMILY[theme.__type] === 'secondaryRebrand'
    ? `font-weight: ${theme.TYPOGRAPHY.fontWeight.bold};`
    : '';

export const setButtonTextTransform = (theme: ThemeType) =>
  THEME_FAMILY[theme.__type] === 'secondaryRebrand' ? 'none' : 'uppercase';

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
