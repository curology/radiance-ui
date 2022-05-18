import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import CALLOUT_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${CALLOUT_STORIES.title}/Tertiary`,
  parameters: {
    chromatic: CALLOUT_STORIES.parameters.chromatic,
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
