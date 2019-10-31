/*
 * Note: Each config is exported separately to be rendered in storybook:
 * https://github.com/PocketDerm/PocketDerm/blob/master/resources/assets/component-library/stories/colors/index.js#L5
 */
import { withDeprecationWarning } from '../../utils';

const DEFAULT = '#706D87';
const DEFAULT_BACKGROUND = '#ededf0';
const DEFAULT_BORDER = '#e1e0e6';

export const brandColors = {
  // Primary 1
  purple100: '#332e54',
  purple85: '#524D6E',
  purple70: DEFAULT,
  purple30: '#c3c0cd',
  purple15: DEFAULT_BORDER,
  purple10: DEFAULT_BACKGROUND,
  purple4: '#f8f8fa',

  // Primary 2
  lavender100: '#a6a1e2',
  lavender80: '#b8b4e8',
  lavender60: '#cac7ee',
  lavender10: '#efeef7',

  // Secondary
  brown: '#b76706',
  green: '#6c9d4b',
  greenLight: '#cad1b4',
  peach: '#efd4c7',
  red: '#ff5e4d',

  // Status
  statusGreen: '#2B6E33',
  statusGreenBackground: '#EAF1EB',
  statusGreenBorder: '#DFE9E0',
  statusPurple: '#554CB3',
  statusPurpleBackground: '#EEEDF7',
  statusPurpleBorder: '#E5E3F3',
  statusRed: '#BD200F',
  statusRedBackground: '#F7EAE8',
  statusRedBorder: '#F3DEDC',
  statusGrey: DEFAULT,
  statusGreyBackground: DEFAULT_BACKGROUND,
  statusGreyBorder: DEFAULT_BORDER,

  // Misc
  black: '#000000',
  white: '#ffffff',
  yellow: '#eed153',
  facebookBlue: '#305c99',
};

export const legacyColors = {
  charcoal: '#353a39',
  grey1: '#999999', // numbers go from darkest to lightest
  orange: '#fc7b65',
  teal: '#d5e9e5',
  yellowLight: '#f4f2b0',
  purple80: '#5C5876',
  purple60: '#858298',
};

export const colorAliases = {
  // Legacy
  purple: brandColors.purple100,
  purpleTint1: brandColors.purple85,
  purpleTint2: brandColors.purple70,

  // brand colors
  primary: brandColors.purple100,
  primaryTint1: brandColors.purple85,
  primaryTint2: brandColors.purple70,
  primaryTint3: brandColors.purple30,
  secondary: brandColors.lavender100,
  tertiary: brandColors.purple4,

  // general colors
  success: brandColors.statusGreen,
  successBackground: brandColors.statusGreenBackground,
  successBorder: brandColors.statusGreenBorder,
  info: brandColors.statusPurple,
  infoBackground: brandColors.statusPurpleBackground,
  infoBorder: brandColors.statusPurpleBorder,
  error: brandColors.statusRed,
  errorBackground: brandColors.statusRedBackground,
  errorBorder: brandColors.statusRedBorder,
  default: brandColors.purple70,
  defaultBackground: brandColors.purple10,
  defaultBorder: brandColors.purple15,
  accent: brandColors.red,
  disabled: brandColors.purple10,
  failure: brandColors.red,
  hover: brandColors.purple4,
  warning: legacyColors.yellowLight,

  // ui colors
  background: brandColors.purple4,
  backgroundDark: brandColors.purple4,
  border: brandColors.purple10,
  divider: brandColors.purple10,

  // form colors
  radioBorder: brandColors.purple30,
  radioBorderSelected: brandColors.lavender100,

  // typography
  textMuted: brandColors.purple70,
  textGhost: brandColors.purple30,
  textDisabled: brandColors.purple30,

  // overlay
  overlay: 'rgba(45, 45, 48, 0.7)',
  overlayHidden: 'rgba(45, 45, 48, 0)',
  overlaySolid: 'rgba(45, 45, 48, 1)',
  overlayTransition: 'rgba(45, 45, 48, 0.3)',
};

export const postcardColors = {
  postcardSocialBg: '#f2f2f2',
  postcardWhite: brandColors.purple4,
  postcardGreen: '#b8dca6',
  postcardBlue: '#cae9f1',
  postcardNude: '#e0c2b1',
  postcardPeach: '#ffd3b0',
  postcardOrange: legacyColors.orange,
  postcardBlack: '#414141',
  postcardGrey: '#bfc6cb',
  postcardYellow: brandColors.yellow,
};

// Dont change these keys -- will affect treatment page guide colors
export const guideColors = {
  sunscreenGuide: '#fcf4d5',
  bigZitsGuide: '#f3d7be',
  birthControlGuide: '#d0eae5',
  oilySkinGuide: '#bdc5cb',
  dietGuide: '#efd5ca',
  drySkinGuide: '#f3f1a4',
  makeupGuide: '#f7a9b7',
  azelaicAcidGuide: '#9ddcc5',
  vitaminCGuide: '#f5c065',
  tretinoinGuide: '#d2c8b0',
  niacinamideGuide: '#f2a486',
  clindamycinGuide: '#bad383',
  zincPyrithioneGuide: '#83c6e3',
  ourFavoriteMoisturizersGuide: '#a7a0cf',
  recommendedCleansersGuide: '#cad1b5',
};

const colorsCompilation = {
  ...brandColors,
  ...legacyColors,
  ...colorAliases,
  ...postcardColors,
  ...guideColors,
};

const deprecatedProperties = {
  purple80: 'purple80 is deprecated. Use purple85 instead',
  purple60: 'purple60 is deprecated. Use purple70 instead',
};

export default withDeprecationWarning(colorsCompilation, deprecatedProperties);
