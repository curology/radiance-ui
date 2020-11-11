import PropTypes from 'prop-types';

import COLORS from '.';

const SECONDARY_COLORS = {
  // brand colors
  primary: '#2C2A25',
  primaryTint1: '#2C2A25',
  primaryTint2: '#2C2A25',
  primaryTint3: '#2C2A25',
  primaryTint4: '#F0EEEC',
  secondary: '#C4BFB7',
  secondaryTint1: '#D2CEC8',
  secondaryTint2: '#E1DEDA',
  secondaryTint3: '#F0EEEC',
  secondaryTint4: '#F0EEEC',
  tertiary: '#FEE582',
  tertiaryTint1: '#FBEEAE',
  tertiaryTint2: '#FDF2C2',
  tertiaryTint3: '#FEF6D5',
  tertiaryTint4: '#FEFAE9',

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
