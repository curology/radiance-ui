import SECONDARY_COLORS from '../colors/secondary';
import SECONDARY_BORDER_RADIUS from '../borderRadius/secondary';
import SECONDARY_BOX_SHADOWS from '../boxShadows/secondary';
import SECONDARY_FONTS from '../fonts/secondary';
import { SECONDARY_TYPOGRAPHY } from '../typography/secondary';

export const secondaryTheme = {
  __type: 'secondary',
  BORDER_RADIUS: SECONDARY_BORDER_RADIUS,
  BOX_SHADOWS: SECONDARY_BOX_SHADOWS,
  COLORS: SECONDARY_COLORS,
  FONTS: SECONDARY_FONTS,
  TYPOGRAPHY: SECONDARY_TYPOGRAPHY,
} as const;
