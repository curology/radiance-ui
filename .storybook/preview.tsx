import React from 'react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import addons, { StoryContext, StoryGetter } from '@storybook/addons';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Theme from './theme';
import {
  resetStyles,
  brandStyles,
} from '../src/utils/injectGlobalStyles/style';
import { primaryTheme, secondaryTheme } from '../src/constants/themes';
import { ThemeType } from '../src/constants/themes/types';
import { BREAKPOINTS } from '../src/constants';

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
      globals: { theme: contextTheme },
    } = context;

    return contextTheme === primaryTheme.__type ? primaryTheme : secondaryTheme;
  };

  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetStyles} />
      <Global styles={brandStyles(theme)} />
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
