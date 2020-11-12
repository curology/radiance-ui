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
  success: '#406237',
  successBackground: '#ECEFEB',
  successBorder: '#ECEFEB',
  info: '#2C2A25',
  infoBackground: '#FEFAE9',
  infoBorder: '#FEFAE9',
  error: '#A33F29',
  errorBackground: '#F6ECEA',
  errorBorder: '#F6ECEA',
  default: '#2C2A25',
  defaultBackground: '#F0EEEC',
  accent: '#F0EEEC',
  disabled: '',
  failure: '',
  hover: '',
  warning: '',

  // ui colors
  background: '#FFFEF2',
  backgroundDark: '#C4BFB7',
  border: '#E1DEDA',
  divider: '#E1DEDA',

  // form colors
  radioBorder: '',
  radioBorderSelected: '',

  // typography
  textMuted: '#C4BFB7',
  textGhost: '#C4BFB7',
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
