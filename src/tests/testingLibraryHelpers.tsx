import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import * as ReactTestingLibrary from '@testing-library/react';

import { primaryTheme, ThemeType } from '../constants';

// We customize @testing-library methods to bake-in theming and keep unit tests DRY
const customRender = (
  Component: React.ReactElement,
  options?: Omit<ReactTestingLibrary.RenderOptions, 'queries'>,
  theme: ThemeType = primaryTheme,
): ReactTestingLibrary.RenderResult =>
  ReactTestingLibrary.render(
    <ThemeProvider theme={theme}>{Component}</ThemeProvider>,
    options,
  );

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
