import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import CAROUSEL_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: 'Components/Carousel/Secondary',
  parameters: {
    chromatic: CAROUSEL_STORIES.parameters.chromatic,
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
