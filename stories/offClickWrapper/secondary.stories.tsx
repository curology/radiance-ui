import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import OFF_CLICK_WRAPPER_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${OFF_CLICK_WRAPPER_STORIES.title}/Secondary`,
  parameters: {
    chromatic: OFF_CLICK_WRAPPER_STORIES.parameters.chromatic,
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
