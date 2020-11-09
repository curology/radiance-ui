import { ThemeType } from '../../constants';

// TODO: potentially break out these pairings to the color constants file
export const textColorsAssociatedWithColors = (theme: ThemeType) =>
  ({
    [theme.COLORS.primary]: {
      tint1: theme.COLORS.primaryTint1,
      tint2: theme.COLORS.primaryTint2,
    },
    [theme.COLORS.secondary]: {
      tint1: theme.COLORS.secondaryTint1,
      tint2: theme.COLORS.secondaryTint2,
    },
  } as const);
