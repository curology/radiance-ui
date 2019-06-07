import { addParameters, addDecorator } from '@storybook/react';
import Theme from './theme';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

addParameters({
  options: {
    theme: Theme,
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: true,
    isToolshown: true,
    sortStoriesByKind: false,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    sidebarAnimations: true,
    selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    enableShortcuts: true,
  },
  viewport: {
    defaultViewport: 'responsive',
  },
});
