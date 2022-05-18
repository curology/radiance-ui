import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import CONSTANTS_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${CONSTANTS_STORIES.title}/Tertiary`,
  parameters: {
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
