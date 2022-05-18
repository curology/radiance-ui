import PRIMARY_COLORS from '../colors/primary';
import PRIMARY_BORDER_RADIUS from '../borderRadius/primary';
import PRIMARY_BOX_SHADOWS from '../boxShadows/primary';
import TERTIARY_FONTS from '../fonts/tertiary';
import { TERTIARY_TYPOGRAPHY } from '../typography/tertiary';

export const tertiaryTheme = {
  __type: 'tertiary',
  BORDER_RADIUS: PRIMARY_BORDER_RADIUS,
  BOX_SHADOWS: PRIMARY_BOX_SHADOWS,
  COLORS: PRIMARY_COLORS,
  FONTS: TERTIARY_FONTS,
  TYPOGRAPHY: TERTIARY_TYPOGRAPHY,
} as const;
