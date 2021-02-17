import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import ANCHOR_LINK_BUTTON_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${ANCHOR_LINK_BUTTON_STORIES.title}/Secondary`,
  parameters: {
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
