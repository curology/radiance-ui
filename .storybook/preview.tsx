import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import addons from '@storybook/addons';
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

/**
 * {@link https://storybook.js.org/docs/react/configure/features-and-behavior Options}
 */
const ADDONS_CONFIG = {
  enableShortcuts: true,
  isFullscreen: false,
  isToolshown: true,
  panelPosition: 'right',
  showNav: true,
  showPanel: true,
  sidebarAnimations: true,
  theme: Theme,
};

addons.setConfig(ADDONS_CONFIG);

addParameters({
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
  docs: {
    theme: Theme,
  },
  /**
   * TODO-@storybook/addon-docs: Our storybook-readme use means we need to
   * duplicate the setConfig options via addParameters, too. Once we overhaul
   * story/documentation setup we can properly deprecate this usage.
   */
  options: {
    ...ADDONS_CONFIG,
    storySort: {
      // TODO: Reconfigure once everything is working
      order: ['Accordion'],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
