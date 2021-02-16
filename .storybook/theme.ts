import { create } from '@storybook/theming';
import { primaryTheme } from '../src/constants/themes';

/**
 * TODO-MA: Add theme support/toggling for Storybook Theme
 */
const Theme = create({
  base: 'light',

  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',

  // UI
  appBg: '#F6F9FC',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,
  appContentBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.1)',
  inputBorderRadius: 4,
  inputTextColor: '#333333',

  // Toolbar default and active colors
  barBg: '#FFFFFF',
  barTextColor: '#999999',
  barSelectedColor: '#1EA7FD',

  // Typography
  fontBase:
    primaryTheme.FONTS.baseFont +
    `"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  fontCode: `"Operator Mono", "Fira Code Retina", "Fira Code", "FiraCode-Retina", "Andale Mono", "Lucida Console", Consolas, Monaco, monospace`,

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',

  brandTitle: 'Radiance UI',
  brandUrl: 'https://www.curology.com',
});

export default Theme;
