import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';

import { primaryTheme, ThemeType } from '../constants';

// We customize react-test-renderer methods to bake-in theming and keep unit tests DRY
export const renderer = {
  create: (
    Component: React.ReactElement,
    options?: TestRenderer.TestRendererOptions,
    theme: ThemeType = primaryTheme,
  ) =>
    TestRenderer.create(
      <ThemeProvider theme={theme}>{Component}</ThemeProvider>,
      options,
    ),
};
