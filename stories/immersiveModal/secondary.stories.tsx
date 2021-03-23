import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import IMMERSIVE_MODALS_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${IMMERSIVE_MODALS_STORIES.title}/Secondary`,
  parameters: {
    chromatic: IMMERSIVE_MODALS_STORIES.parameters.chromatic,
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
