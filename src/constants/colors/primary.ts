import PropTypes from 'prop-types';

import COLORS from '.';

const PRIMARY_COLORS = {
  // brand colors
  primary: COLORS.purple100,
  primaryTint1: COLORS.purple85,
  primaryTint2: COLORS.purple70,
  primaryTint3: COLORS.purple30,
  secondary: COLORS.lavender100,
  secondaryTint1: COLORS.lavender80,
  secondaryTint2: COLORS.lavender60,
  secondaryTint3: COLORS.lavender10,
  tertiary: COLORS.purple4,

  // general colors
  success: COLORS.statusGreen,
  successBackground: COLORS.statusGreenBackground,
  successBorder: COLORS.statusGreenBorder,
  info: COLORS.statusPurple,
  infoBackground: COLORS.statusPurpleBackground,
  infoBorder: COLORS.statusPurpleBorder,
  error: COLORS.statusRed,
  errorBackground: COLORS.statusRedBackground,
  errorBorder: COLORS.statusRedBorder,
  default: COLORS.purple70,
  defaultBackground: COLORS.purple10,
  defaultBorder: COLORS.purple15,
  accent: COLORS.red,
  disabled: COLORS.purple10,
  failure: COLORS.red,
  hover: COLORS.purple4,
  warning: COLORS.yellowLight,

  // ui colors
  background: COLORS.purple4,
  backgroundDark: COLORS.purple4,
  border: COLORS.purple10,
  divider: COLORS.purple10,

  // form colors
  radioBorder: COLORS.purple30,
  radioBorderSelected: COLORS.lavender100,

  // typography
  textMuted: COLORS.purple70,
  textGhost: COLORS.purple30,
  textDisabled: COLORS.purple30,

  // overlay
  overlay: 'rgba(45, 45, 48, 0.7)',
  overlaySolid: 'rgba(45, 45, 48, 1)',

  black: COLORS.black,
  white: COLORS.white,
} as const;

export const PRIMARY_COLORS_PROP_TYPES = PropTypes.oneOf(
  Object.values(PRIMARY_COLORS),
);

export default PRIMARY_COLORS;
