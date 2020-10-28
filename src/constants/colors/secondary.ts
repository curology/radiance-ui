import PropTypes from 'prop-types';

import COLORS from '.';

const SECONDARY_COLORS = {
  // brand colors
  primary: '#4c0000',
  primaryTint1: '#b20000',
  primaryTint2: undefined,
  primaryTint3: '#ff0000',
  secondary: '#ff8000',
  tertiary: undefined,

  // general colors
  success: undefined,
  successBackground: undefined,
  successBorder: undefined,
  info: undefined,
  infoBackground: undefined,
  infoBorder: undefined,
  error: undefined,
  errorBackground: undefined,
  errorBorder: undefined,
  default: undefined,
  defaultBackground: undefined,
  defaultBorder: undefined,
  accent: undefined,
  disabled: undefined,
  failure: undefined,
  hover: undefined,
  warning: undefined,

  // ui colors
  background: undefined,
  backgroundDark: undefined,
  border: undefined,
  divider: undefined,

  // form colors
  radioBorder: undefined,
  radioBorderSelected: undefined,

  // typography
  textMuted: undefined,
  textGhost: undefined,
  textDisabled: undefined,

  // overlay
  overlay: undefined,
  overlaySolid: undefined,

  black: COLORS.black,
  white: COLORS.white,
};

export const SECONDARY_COLORS_PROP_TYPES = PropTypes.oneOf(
  Object.values(SECONDARY_COLORS),
);

export default SECONDARY_COLORS;
