import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import ALERT_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${ALERT_STORIES.title}/Secondary`,
  parameters: {
    chromatic: ALERT_STORIES.parameters.chromatic,
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
