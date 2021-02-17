import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import INDICATOR_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: 'Components/Indicator/Secondary',
  parameters: {
    chromatic: INDICATOR_STORIES.parameters.chromatic,
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
