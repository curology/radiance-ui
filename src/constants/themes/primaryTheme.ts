import PRIMARY_COLORS from '../colors/primary';
import PRIMARY_FONTS from '../fonts/primary';
import { PRIMARY_TYPOGRAPHY } from '../typography/primaryTypography';

export const primaryTheme = {
  __type: 'primary',
  BOX_SHADOW: {},
  COLORS: PRIMARY_COLORS,
  FONTS: PRIMARY_FONTS,
  TYPOGRAPHY: PRIMARY_TYPOGRAPHY,
} as const;
