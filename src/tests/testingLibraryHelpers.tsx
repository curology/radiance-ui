import React from 'react';
import { ThemeProvider } from '@emotion/react';
import * as ReactTestingLibrary from '@testing-library/react';

import { REACT_PORTAL_SECTION_ID, primaryTheme, ThemeType } from '../constants';

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
const addPortalContainer = () => {
  const portalContainer = document.createElement('div');
  portalContainer.setAttribute('id', REACT_PORTAL_SECTION_ID);
  document.body.appendChild(portalContainer);

  return portalContainer;
};

/**
 * We customize @testing-library methods to bake-in theming and keep unit tests DRY.
 */
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

  return ReactTestingLibrary.render(Component, {
    container: withPortalContainer ? addPortalContainer() : container,
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
    ...rest,
  });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
