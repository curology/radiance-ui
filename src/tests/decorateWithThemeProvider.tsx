import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { primaryTheme } from '../constants/themes';
import type { ThemeType } from '../constants/themes/types';

type PropsType = Record<string, unknown>;

/* eslint-disable react/jsx-props-no-spreading, @typescript-eslint/no-explicit-any */
export const decorateWithThemeProvider = (
  Component: any,
  theme: ThemeType = primaryTheme,
) => (props: PropsType) => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
);
/* eslint-enable react/jsx-props-no-spreading */
