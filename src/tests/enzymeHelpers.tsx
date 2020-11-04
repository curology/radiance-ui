import {
  mount as enzymeMount,
  MountRendererProps,
  shallow as enzymeShallow,
  ShallowRendererProps,
} from 'enzyme';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { ThemeType } from 'src/constants/themes/types';
import { primaryTheme } from 'src/constants';

// We customize enzyme helper methods to bake-in theming and keep unit tests DRY
export const mount = (
  Component: React.ReactElement,
  options?: MountRendererProps,
  theme: ThemeType = primaryTheme,
) =>
  enzymeMount(
    <ThemeProvider theme={theme}>{Component}</ThemeProvider>,
    options,
  );

export const shallow = (
  Component: React.ReactElement,
  options?: ShallowRendererProps,
  theme: ThemeType = primaryTheme,
) =>
  enzymeShallow(
    <ThemeProvider theme={theme}>{Component}</ThemeProvider>,
    options,
  );
