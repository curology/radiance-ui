import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import VERIFICATION_MESSAGES_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${VERIFICATION_MESSAGES_STORIES.title}/Tertiary`,
  parameters: {
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
