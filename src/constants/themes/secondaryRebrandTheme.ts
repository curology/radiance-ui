import SECONDARY_REBRAND_COLORS from '../colors/secondaryRebrand';
import SECONDARY_REBRAND_BORDER_RADIUS from '../borderRadius/secondaryRebrand';
import SECONDARY_REBRAND_BOX_SHADOWS from '../boxShadows/secondaryRebrand';
import SECONDARY_REBRAND_FONTS from '../fonts/secondaryRebrand';
import { SECONDARY_REBRAND_TYPOGRAPHY } from '../typography/secondaryRebrand';

export const secondaryRebrandTheme = {
  __type: 'secondaryRebrand',
  BORDER_RADIUS: SECONDARY_REBRAND_BORDER_RADIUS,
  BOX_SHADOWS: SECONDARY_REBRAND_BOX_SHADOWS,
  COLORS: SECONDARY_REBRAND_COLORS,
  FONTS: SECONDARY_REBRAND_FONTS,
  TYPOGRAPHY: SECONDARY_REBRAND_TYPOGRAPHY,
} as const;
