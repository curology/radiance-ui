import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import LOADING_SPINNER_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${LOADING_SPINNER_STORIES.title}/Tertiary`,
  parameters: {
    chromatic: LOADING_SPINNER_STORIES.parameters.chromatic,
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
