import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import addons, { StoryContext, StoryGetter } from '@storybook/addons';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Theme from './theme';
import {
  resetStyles,
  brandStyles,
} from '../src/utils/injectGlobalStyles/style';
import { primaryTheme, secondaryTheme } from '../src/constants/themes';
import { ThemeType } from '../src/constants/themes/types';
import { BREAKPOINTS } from '../src/constants';

const InjectGlobalStyles = (storyFn) => (
  <React.Fragment>
    <Global styles={resetStyles} />
    <Global styles={brandStyles} />
    <Global
      styles={css`
        @font-face {
          font-family: 'nocturno';
          src: url('https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.eot');
          src: url('https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.eot?#iefix')
              format('embedded-opentype'),
            url('https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.woff2')
              format('woff2'),
            url('https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.woff')
              format('woff'),
            url('https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.svg#Typotheque_webfonts_service')
              format('svg');
        }
      `}
    />
    <Global
      styles={css`
        @font-face {
          font-family: 'larssiet';
          src: url('https://assets.curology.com/fonts/larssiet/34535B_1_0.eot');
          src: url('https://assets.curology.com/fonts/larssiet/34535B_1_0.eot?#iefix')
              format('embedded-opentype'),
            url('https://assets.curology.com/fonts/larssiet/34535B_1_0.woff2')
              format('woff2'),
            url('https://assets.curology.com/fonts/larssiet/34535B_1_0.woff')
              format('woff'),
            url('https://assets.curology.com/fonts/larssiet/34535B_1_0.ttf')
              format('truetype');
        }
      `}
    />
    <Global
      styles={css`
        @font-face {
          font-family: 'larssiet';
          font-weight: bold;
          src: url('https://assets.curology.com/fonts/larssiet/34535B_0_0.eot');
          src: url('https://assets.curology.com/fonts/larssiet/34535B_0_0.eot?#iefix')
              format('embedded-opentype'),
            url('https://assets.curology.com/fonts/larssiet/34535B_0_0.woff2')
              format('woff2'),
            url('https://assets.curology.com/fonts/larssiet/34535B_0_0.woff')
              format('woff'),
            url('https://assets.curology.com/fonts/larssiet/34535B_0_0.ttf')
              format('truetype');
        }
      `}
    />
    {storyFn()}
  </React.Fragment>
);

addDecorator(InjectGlobalStyles);

const ADDONS_REQUIRED_IN_OPTIONS = {
  isFullscreen: false,
  isToolshown: true,
  panelPosition: 'bottom',
  showNav: true,
  showPanel: true,
};

/**
 * {@link https://storybook.js.org/docs/react/configure/features-and-behavior Options}
 */
const ADDONS_CONFIG = {
  ...ADDONS_REQUIRED_IN_OPTIONS,
  enableShortcuts: true,
  sidebarAnimations: true,
  theme: Theme,
};

addParameters({
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
  /**
   * Defaults to smallest mobile and smallest desktop breakpoints for visual regression testing.
   * Override on a per-story basis if component stories only need to test one breakpoint,
   * typically small components that are the same on all views (e.g. Chip, Indicator)
   */
  chromatic: { viewports: [BREAKPOINTS.xs, BREAKPOINTS.md] },
  docs: {
    theme: Theme,
  },
  options: ADDONS_REQUIRED_IN_OPTIONS,
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addons.setConfig(ADDONS_CONFIG);

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: primaryTheme.__type,
    toolbar: {
      icon: 'switchalt',
      items: [
        { value: primaryTheme.__type, title: 'Primary Theme' },
        {
          value: secondaryTheme.__type,
          title: 'Secondary Theme',
        },
      ],
    },
  },
};

const withThemeProvider = (Story: StoryGetter, context: StoryContext) => {
  const getTheme = (): ThemeType => {
    const {
      globals: { theme },
    } = context;

    return theme === primaryTheme.__type ? primaryTheme : secondaryTheme;
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
