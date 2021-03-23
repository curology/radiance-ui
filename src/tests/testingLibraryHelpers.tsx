import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import * as ReactTestingLibrary from '@testing-library/react';

import { primaryTheme, ThemeType } from '../constants';

interface RenderOptions extends ReactTestingLibrary.RenderOptions {
  theme?: ThemeType;
  withPortalContainer?: boolean;
}

/**
 * Many of our pages rely on components that make use of portals.
 *
 * Unit tests for components that do that **do not include such a portal
 * container in their unit test** will have test failures on CI due to
 * serialization order being off.
 */
const usePortalContainer = () => {
  const portalContainer = document.createElement('div');
  portalContainer.setAttribute('id', 'reactPortalSection');
  document.body.appendChild(portalContainer);

  return portalContainer;
};

// We customize @testing-library methods to bake-in theming and keep unit tests DRY.
// We do not use ReactTestingLibrary.render(Component, { wrapper }) option because
// `@testing-library/react` is (somehow) overwriting React with its own API when used.
// This issue is specific to this repo and is not present in other implementations.
// <ThemeProvider> leaves no DOM trace, anyway, so there's no functional difference.
const customRender = (
  Component: React.ReactElement,
  options: RenderOptions = {},
): ReactTestingLibrary.RenderResult => {
  const {
    theme = primaryTheme,
    container,
    withPortalContainer = false,
    ...rest
  } = options;

  return ReactTestingLibrary.render(
    <ThemeProvider theme={theme}>{Component}</ThemeProvider>,
    {
      container: withPortalContainer ? usePortalContainer() : container,
      ...rest,
    },
  );
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
