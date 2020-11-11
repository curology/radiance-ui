import PropTypes from 'prop-types';

import COLORS from '.';

const SECONDARY_COLORS = {
  // brand colors
  primary: '#4c0000',
  primaryTint1: '#b20000',
  primaryTint2: '',
  primaryTint3: '#ff0000',
  secondary: '#ff8000',
  secondaryTint1: '',
  secondaryTint2: '',
  secondaryTint3: '',
  tertiary: '',

  // general colors
  success: '',
  successBackground: '',
  successBorder: '',
  info: '',
  infoBackground: '',
  infoBorder: '',
  error: '',
  errorBackground: '',
  errorBorder: '',
  default: '',
  defaultBackground: '',
  defaultBorder: '',
  accent: '',
  disabled: '',
  failure: '',
  hover: '',
  warning: '',

  // ui colors
  background: '',
  backgroundDark: '',
  border: '',
  divider: '',

  // form colors
  radioBorder: '',
  radioBorderSelected: '',

  // typography
  textMuted: '',
  textGhost: '',
  textDisabled: '',

  // overlay
  overlay: '',
  overlaySolid: '',

  black: COLORS.black,
  white: COLORS.white,
  transparent: 'transparent',
} as const;

export const SECONDARY_COLORS_PROP_TYPES = PropTypes.oneOf(
  Object.values(SECONDARY_COLORS),
);

export default SECONDARY_COLORS;
