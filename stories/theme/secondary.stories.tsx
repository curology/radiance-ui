import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import THEME_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${THEME_STORIES.title}/Secondary`,
  parameters: {
    chromatic: THEME_STORIES.parameters.chromatic,
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
