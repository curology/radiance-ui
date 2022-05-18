import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import CAROUSEL_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${CAROUSEL_STORIES.title}/Tertiary`,
  parameters: {
    chromatic: CAROUSEL_STORIES.parameters.chromatic,
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
