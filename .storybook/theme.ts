import { create } from '@storybook/theming';
import { primaryTheme, secondaryTheme } from '../src/constants/themes';

console.log('in theme creation', primaryTheme);

const Theme = create({
  base: 'dark',

  // colorPrimary: '#FF4785',
  colorPrimary: primaryTheme.COLORS.primary,
  // colorSecondary: '#1EA7FD',
  colorSecondary: primaryTheme.COLORS.secondary,

  // UI
  // appBg: '#F6F9FC',
  // appBorderColor: 'rgba(0,0,0,.1)',
  // appBorderRadius: 4,
  // appContentBg: '#FFFFFF',
  appBg: primaryTheme.COLORS.background,
  appBorderColor: primaryTheme.COLORS.border,
  appBorderRadius: parseInt(primaryTheme.BORDER_RADIUS.small),
  appContentBg: primaryTheme.COLORS.white,

  // Form colors
  // inputBg: '#FFFFFF',
  // inputBorder: 'rgba(0,0,0,.1)',
  // inputBorderRadius: 4,
  // inputTextColor: '#333333',
  inputBg: primaryTheme.COLORS.white,
  inputBorder: 'purple',
  inputBorderRadius: parseInt(primaryTheme.BORDER_RADIUS.small),
  inputTextColor: primaryTheme.COLORS.black,

  // Toolbar default and active colors
  // barBg: '#FFFFFF',
  // barTextColor: '#999999',
  // barSelectedColor: '#1EA7FD',
  barBg: primaryTheme.COLORS.white,
  barTextColor: 'yellow',
  barSelectedColor: 'pink',

  // Typography
  // fontBase: `"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  fontBase:
    primaryTheme.FONTS.baseFont +
    `"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  fontCode: `"Operator Mono", "Fira Code Retina", "Fira Code", "FiraCode-Retina", "Andale Mono", "Lucida Console", Consolas, Monaco, monospace`,

  // Text colors
  textColor: primaryTheme.COLORS.black,
  textInverseColor: primaryTheme.COLORS.white,
  textMutedColor: 'pink',

  brandTitle: 'Radiance UI Redux',
  brandUrl: 'https://www.curology.com',
  gridCellSize: 100,
});

export default Theme;
