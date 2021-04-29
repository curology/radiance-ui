import type { ThemeType } from '../../constants';

// TODO: potentially break out these pairings to the color constants file
export const textColorsAssociatedWithColors = (theme: ThemeType) =>
  new Map([
    [
      theme.COLORS.primary,
      {
        tint1: theme.COLORS.primaryTint1,
        tint2: theme.COLORS.primaryTint2,
      },
    ],
    [
      theme.COLORS.secondary,
      {
        tint1: theme.COLORS.secondaryTint1,
        tint2: theme.COLORS.secondaryTint2,
      },
    ],
    ['other', undefined],
  ]);
