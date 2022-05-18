import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import TYPOGRAPHY_STYLE_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${TYPOGRAPHY_STYLE_STORIES.title}/Tertiary`,
  parameters: {
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
