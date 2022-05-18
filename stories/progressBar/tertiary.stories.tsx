import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import PROGRESS_BAR_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${PROGRESS_BAR_STORIES.title}/Tertiary`,
  parameters: {
    chromatic: PROGRESS_BAR_STORIES.parameters.chromatic,
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
