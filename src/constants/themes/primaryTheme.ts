import PRIMARY_COLORS from '../colors/primary';
import PRIMARY_BORDER_RADIUS from '../borderRadius/primary';
import PRIMARY_BOX_SHADOWS from '../boxShadows/primary';
import PRIMARY_FONTS from '../fonts/primary';
import { PRIMARY_TYPOGRAPHY } from '../typography/primary';

export const primaryTheme = {
  __type: 'primary',
  BORDER_RADIUS: PRIMARY_BORDER_RADIUS,
  BOX_SHADOWS: PRIMARY_BOX_SHADOWS,
  COLORS: PRIMARY_COLORS,
  FONTS: PRIMARY_FONTS,
  TYPOGRAPHY: PRIMARY_TYPOGRAPHY,
} as const;
