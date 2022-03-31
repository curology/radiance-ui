import React from 'react';
import { ThemeProvider } from '@emotion/react';
import * as ReactTestingLibrary from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { primaryTheme, REACT_PORTAL_SECTION_ID, ThemeType } from '../constants';

type UserEventSetup = typeof userEvent.setup;

interface RenderOptions extends ReactTestingLibrary.RenderOptions {
  theme?: ThemeType;
  userEventOptions?: Parameters<UserEventSetup>[number];
  withPortalContainer?: boolean;
}

interface RenderReturn extends ReactTestingLibrary.RenderResult {
  user: ReturnType<UserEventSetup>;
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
): RenderReturn => {
  const {
    theme = primaryTheme,
    container,
    withPortalContainer = false,
    userEventOptions,
    ...rest
  } = options;

  return {
    ...ReactTestingLibrary.render(Component, {
      container: withPortalContainer ? usePortalContainer() : container,
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
      ...rest,
    }),
    user: userEvent.setup(userEventOptions),
  };
};

export * from '@testing-library/react';

export { customRender as render };
