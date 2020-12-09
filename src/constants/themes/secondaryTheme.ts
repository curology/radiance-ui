import SECONDARY_COLORS from '../colors/secondary';
import SECONDARY_BOX_SHADOWS from '../boxShadows/secondary';
import SECONDARY_FONTS from '../fonts/secondary';
import { SECONDARY_TYPOGRAPHY } from '../typography/secondary';

export const secondaryTheme = {
  __type: 'secondary',
  BOX_SHADOWS: SECONDARY_BOX_SHADOWS,
  COLORS: SECONDARY_COLORS,
  FONTS: SECONDARY_FONTS,
  TYPOGRAPHY: SECONDARY_TYPOGRAPHY,
} as const;
