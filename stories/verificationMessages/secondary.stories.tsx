import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import VERIFICATION_MESSAGES_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${VERIFICATION_MESSAGES_STORIES.title}/Secondary`,
  parameters: {
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
