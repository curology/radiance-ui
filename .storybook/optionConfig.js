import { addParameters, addDecorator } from '@storybook/react';
import Theme from './theme';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import centered from '@storybook/addon-centered/react';
import { configureReadme } from 'storybook-readme';
import { css } from '@emotion/core';

addDecorator(withA11y);
addDecorator(addReadme);
configureReadme({ DocPreview: ({ children }) => <div css={css`padding: 1rem;`}>{children}</div>, StoryPreview: ({ children }) => <div css={css`padding: 1rem;`}>{children}</div>})

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
