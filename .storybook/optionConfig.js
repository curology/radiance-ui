import { addParameters, addDecorator } from '@storybook/react';
import Theme from './theme';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import centered from '@storybook/addon-centered/react';
import { configureReadme } from 'storybook-readme';
import { Global, css } from '@emotion/core';
import { resetStyles, brandStyles } from '../src/utils/injectGlobalStyles/style';

addDecorator(withA11y);
addDecorator(addReadme);
configureReadme({
  DocPreview: ({ children }) => (
    <div
      css={css`
        padding: 1rem;
      `}
    >
      {children}
    </div>
  ),
  StoryPreview: ({ children }) => (
    <div
      css={css`
        padding: 1rem;
      `}
    >
      {children}
    </div>
  ),
});


const InjectGlobalStyles = storyFn => (
  <div>
    <Global styles={resetStyles} />
    <Global styles={brandStyles} />
    {storyFn()}
  </div>
);

addDecorator(InjectGlobalStyles);

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
