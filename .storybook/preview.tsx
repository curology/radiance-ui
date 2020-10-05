import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { Global, css } from '@emotion/core';
import Theme from './theme';
import {
  resetStyles,
  brandStyles,
} from '../src/utils/injectGlobalStyles/style';

const InjectGlobalStyles = (storyFn) => (
  <React.Fragment>
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
          src: url('https://assets.curology.com/fonts/larssiet/34535B_1_0.eot');
          src: url('https://assets.curology.com/fonts/larssiet/34535B_1_0.eot?#iefix')
              format('embedded-opentype'),
            url('https://assets.curology.com/fonts/larssiet/34535B_1_0.woff2')
              format('woff2'),
            url('https://assets.curology.com/fonts/larssiet/34535B_1_0.woff')
              format('woff'),
            url('https://assets.curology.com/fonts/larssiet/34535B_1_0.ttf')
              format('truetype');
        }
      `}
    />
    <Global
      styles={css`
        @font-face {
          font-family: 'larssiet';
          font-weight: bold;
          src: url('https://assets.curology.com/fonts/larssiet/34535B_0_0.eot');
          src: url('https://assets.curology.com/fonts/larssiet/34535B_0_0.eot?#iefix')
              format('embedded-opentype'),
            url('https://assets.curology.com/fonts/larssiet/34535B_0_0.woff2')
              format('woff2'),
            url('https://assets.curology.com/fonts/larssiet/34535B_0_0.woff')
              format('woff'),
            url('https://assets.curology.com/fonts/larssiet/34535B_0_0.ttf')
              format('truetype');
        }
      `}
    />
    {storyFn()}
  </React.Fragment>
);

addDecorator(InjectGlobalStyles);

addParameters({
  readme: {
    codeTheme: 'github',
  },
});

addParameters({
  options: {
    theme: Theme,
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
  },
});
