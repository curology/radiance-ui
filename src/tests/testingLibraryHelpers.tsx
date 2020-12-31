import React from 'react';
import { ThemeProvider } from '@emotion/react';
import * as ReactTestingLibrary from '@testing-library/react';

import { primaryTheme, ThemeType } from '../constants';

interface RenderOptions extends ReactTestingLibrary.RenderOptions {
  theme?: ThemeType;
}

// We customize @testing-library methods to bake-in theming and keep unit tests DRY.
// We do not use ReactTestingLibrary.render(Component, { wrapper }) option because
// `@testing-library/react` is (somehow) overwriting React with its own API when used.
// This issue is specific to this repo and is not present in other implementations.
// <ThemeProvider> leaves no DOM trace, anyway, so there's no functional difference.
const customRender = (
  Component: React.ReactElement,
  options: RenderOptions = {},
): ReactTestingLibrary.RenderResult => {
  const { theme = primaryTheme, ...rest } = options;

  return ReactTestingLibrary.render(
    <ThemeProvider theme={theme}>{Component}</ThemeProvider>,
    {
      ...rest,
    },
  );
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
