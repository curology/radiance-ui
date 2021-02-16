import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { RoundButton } from 'src/shared-components';
import styled from '@emotion/styled';
import { SPACER } from 'src/constants';
import type { Meta } from '@storybook/react';
import { ThemeColors } from 'src/constants/themes/types';
import { useTheme } from 'emotion-theming';
import {
  chromaticAwareExcludeStories,
  decorateStoriesWithTheme,
} from 'stories/utils';

export * from './index.stories';

// const { default: Default, ...rest } = RoundButtonStories;

// export { rest };

export default {
  title: 'Components/Button/RoundButton/Secondary',
  component: RoundButton,
  parameters: {
    theme: 'secondary',
  },
  // excludeStories: /.*/,
} as Meta;
