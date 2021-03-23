import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import ACCORDION_SUBCOMPONENTS_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${ACCORDION_SUBCOMPONENTS_STORIES.title}/Secondary`,
  parameters: {
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
