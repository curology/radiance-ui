import { addParameters, addDecorator } from '@storybook/react';
import Theme from './theme';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import centered from '@storybook/addon-centered/react';

addDecorator(withA11y);
addDecorator(addReadme);
addDecorator(centered);

addParameters({
  options: {
    theme: Theme,
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
  },
  viewport: {
    defaultViewport: 'responsive',
  },
});
