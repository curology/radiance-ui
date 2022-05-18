import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import ALERT_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${ALERT_STORIES.title}/Tertiary`,
  parameters: {
    chromatic: ALERT_STORIES.parameters.chromatic,
    theme: 'tertiary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
