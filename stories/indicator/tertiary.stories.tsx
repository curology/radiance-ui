import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import INDICATOR_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${INDICATOR_STORIES.title}/Tertiary`,
  parameters: {
    chromatic: INDICATOR_STORIES.parameters.chromatic,
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
