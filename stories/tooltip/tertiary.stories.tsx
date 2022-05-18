import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import TOOLTIP_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${TOOLTIP_STORIES.title}/Tertiary`,
  parameters: {
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
