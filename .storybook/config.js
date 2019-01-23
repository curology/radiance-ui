import { configure } from '@storybook/react';
import { injectGlobal } from 'emotion';

import injectGlobalStyles from 'src/utils/injectGlobalStyles';

import optionConfig from './optionConfig';

injectGlobal`
  @font-face {
    font-family: 'nocturno';
    src: url("https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.eot");
    src: url("https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.eot?#iefix") format("embedded-opentype"), url("https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.woff2") format("woff2"), url("https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.woff") format("woff"), url("https://s3-us-west-1.amazonaws.com/fonts-california.typotheque.com/WF-029669-009918-001560-fa6dd062b0c32d6d9a297bd175bb0381.svg#Typotheque_webfonts_service") format("svg");
  }
`;

injectGlobal`
  @font-face {
    font-family: 'larssiet';
    src: url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_1_0.eot');
    src: url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_1_0.eot?#iefix') format('embedded-opentype'),url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_1_0.woff2') format('woff2'),url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_1_0.woff') format('woff'),url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_1_0.ttf') format('truetype');
  }
`;

injectGlobal`
  @font-face {
    font-family: 'larssiet';
    font-weight: bold;
    src: url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_0_0.eot');
    src: url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_0_0.eot?#iefix') format('embedded-opentype'),url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_0_0.woff2') format('woff2'),url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_0_0.woff') format('woff'),url('https://s3.amazonaws.com/curology-cdn.com/fonts/larssiet/34535B_0_0.ttf') format('truetype');
  }
`;

injectGlobalStyles();

const req = require.context('../stories', true, /.js$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
