import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import TRANSITIONS_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${TRANSITIONS_STORIES.title}/Tertiary`,
  parameters: {
    chromatic: TRANSITIONS_STORIES.parameters.chromatic,
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
