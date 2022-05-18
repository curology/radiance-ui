import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import ACCORDION_SUBCOMPONENTS_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${ACCORDION_SUBCOMPONENTS_STORIES.title}/Tertiary`,
  parameters: {
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
