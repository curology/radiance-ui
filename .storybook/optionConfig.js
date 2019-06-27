import { addParameters, addDecorator } from '@storybook/react';
import Theme from './theme';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import centered from '@storybook/addon-centered/react';
import { configureReadme } from 'storybook-readme';
import { Global, css } from '@emotion/core';
import {
  resetStyles,
  brandStyles,
} from '../src/utils/injectGlobalStyles/style';

const InjectGlobalStyles = storyFn => (
  <div>
    <Global styles={resetStyles} />
    <Global styles={brandStyles} />
    <Global
      styles={css`
        @font-face {
          font-family: 'nocturno';
          src: url('https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.eot');
          src: url('https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.eot?#iefix')
              format('embedded-opentype'),
            url('https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.woff2')
              format('woff2'),
            url('https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.woff')
              format('woff'),
            url('https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.svg#Typotheque_webfonts_service')
              format('svg');
        }
      `}
    />
    <Global
      styles={css`
        @font-face {
          font-family: 'larssiet';
          src: url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_1_0.eot');
          src: url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_1_0.eot?#iefix')
              format('embedded-opentype'),
            url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_1_0.woff2')
              format('woff2'),
            url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_1_0.woff')
              format('woff'),
            url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_1_0.ttf')
              format('truetype');
        }
      `}
    />
    <Global
      styles={css`
        @font-face {
          font-family: 'larssiet';
          font-weight: bold;
          src: url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_0_0.eot');
          src: url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_0_0.eot?#iefix')
              format('embedded-opentype'),
            url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_0_0.woff2')
              format('woff2'),
            url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_0_0.woff')
              format('woff'),
            url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_0_0.ttf')
              format('truetype');
        }
      `}
    />
    {storyFn()}
  </div>
);

addDecorator(InjectGlobalStyles);
addDecorator(centered);
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
