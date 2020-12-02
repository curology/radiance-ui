import PropTypes from 'prop-types';

const PRIMARY_COLORS = {
  // brand colors
  primary: '#332E54',
  primaryTint1: '#524D6E',
  primaryTint2: '#706D87',
  primaryTint3: '#C3C0CD',
  primaryTint4: '#E1E0E6',
  secondary: '#A6A1E2',
  secondaryTint1: '#B8B4E8',
  secondaryTint2: '#CAC7EE',
  secondaryTint3: '#EFEEF7',
  secondaryTint4: '#EFEEF7',
  tertiary: '#F8F8FA',
  tertiaryTint1: '#F8F8FA',
  tertiaryTint2: '#F8F8FA',
  tertiaryTint3: '#F8F8FA',
  tertiaryTint4: '#F8F8FA',

  // general colors
  default: '#706D87',
  defaultBackground: '#EDEDF0',
  defaultBorder: '#E1E0E6',
  success: '#2B6E33',
  successBackground: '#EAF1EB',
  successBorder: '#DFE9E0',
  error: '#BD200F',
  errorBackground: '#F7EAE8',
  errorBorder: '#F3DEDC',
  info: '#554CB3',
  infoBackground: '#EEEDF7',
  infoBorder: '#E5E3F3',
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',

  // ui colors
  background: '#F8F8FA',
  backgroundDark: '#F8F8FA',
  border: '#EDEDF0',
  divider: '#EDEDF0',

  // typography
  textDisabled: '#C3C0CD',

  // overlay
  overlay: 'rgba(45, 45, 48, 0.7)',
  overlaySolid: 'rgba(45, 45, 48, 1)',
} as const;

export const PRIMARY_COLORS_PROP_TYPES = PropTypes.oneOf(
  Object.values(PRIMARY_COLORS),
);

export default PRIMARY_COLORS;
