import PropTypes from 'prop-types';

const PRIMARY_COLORS = {
  primary: '#332E54',
  primaryTint1: '#524D6E',
  primaryTint2: '#706D87',
  primaryTint3: '#C3C0CD',
  primaryTint4: '#E1E0E6',
  secondary: '#939BF0',
  secondaryTint1: '#B8BCFF',
  secondaryTint2: '#DCDEFF',
  secondaryTint3: '#F5F5FF',
  secondaryTint4: '#EFEEF7',
  tertiary: '#F8F8FA',
  tertiaryTint1: '#F8F8FA',
  tertiaryTint2: '#F8F8FA',
  tertiaryTint3: '#F8F8FA',
  tertiaryTint4: '#F8F8FA',
  default: '#706D87',
  defaultLight: '#EDEDF0',
  defaultBorder: '#E1E0E6',
  success: '#2B6E33',
  successLight: '#EAF1EB',
  successBorder: '#DFE9E0',
  error: '#BD200F',
  errorLight: '#F7EAE8',
  errorBorder: '#F3DEDC',
  info: '#554CB3',
  infoLight: '#EEEDF7',
  infoBorder: '#E5E3F3',
  background: '#F8F8FA',
  backgroundDark: '#F8F8FA',
  overlay: 'rgba(45, 45, 48, 0.7)',
  overlaySolid: '#2D2D30',
  border: '#EDEDF0',
  textDisabled: '#C3C0CD',
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
} as const;

export const PRIMARY_COLORS_PROP_TYPES = PropTypes.oneOf(
  Object.values(PRIMARY_COLORS),
);

export default PRIMARY_COLORS;
