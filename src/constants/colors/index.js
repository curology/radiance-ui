/*
 * Note: Each config is exported separately to be rendered in storybook:
 * https://github.com/PocketDerm/PocketDerm/blob/master/resources/assets/component-library/stories/colors/index.js#L5
 */

export const brandColors = {
  // Primary 1
  purple100: '#332e54',
  purple80: '#5C5876',
  purple60: '#858298',
  purple30: '#c3c0cd',
  purple15: '#e1e0e6',
  purple10: '#ededf0',
  purple4: '#f8f8fa', // Tertiary

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
  statusGreen: '#317f3b',
  statusGreenBackground: '#eaf2eb',
  statusGreenBorder: '#DAECDC',
  statusPurple: '#a6a1e2',
  statusPurpleBackground: '#f6f5fc',
  statusPurpleBorder: '#EBEAF9',
  statusRed: '#ff5e4d',
  statusRedBackground: '#ffeeed',
  statusRedBorder: '#FFE4E2',
  statusGrey: '#858298',
  statusGreyBackground: '#ededf0',
  statusGreyBorder: '#e1e0e6',

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
};

export const colorAliases = {
  // Legacy
  purple: brandColors.purple100,
  purpleTint1: brandColors.purple80,
  purpleTint2: brandColors.purple60,
  purpleTint3: brandColors.purple40,

  // brand colors
  primary: brandColors.purple100,
  primaryTint1: brandColors.purple80,
  primaryTint2: brandColors.purple60,
  primaryTint3: brandColors.purple30,
  secondary: brandColors.lavender100,
  tertiary: brandColors.purple10,

  // general colors
  accent: brandColors.red,
  disabled: brandColors.purple10,
  failure: brandColors.red,
  info: legacyColors.teal,
  success: brandColors.green,
  warning: legacyColors.yellowLight,
  hover: brandColors.purple4,

  // ui colors
  background: brandColors.purple4,
  backgroundDark: brandColors.purple4,
  border: brandColors.purple10,
  divider: brandColors.purple10,

  // form colors
  radioBorder: brandColors.purple30,
  radioBorderSelected: brandColors.lavender100,

  // typography
  textMuted: brandColors.purple60,
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
  postcardPurple: legacyColors.purple,
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

export default Object.assign(
  {},
  brandColors,
  colorAliases,
  postcardColors,
  guideColors
);
