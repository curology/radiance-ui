import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { TextButton } from 'src/shared-components';
import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';
import {
  chromaticAwareExcludeStories,
  decorateStoriesWithTheme,
} from 'stories/utils';

export const Clickable = () => (
  <TextButton onClick={action('Button was clicked')}>
    All of this text is clickable
  </TextButton>
);

export const Disabled = () => (
  <TextButton disabled>This text button is disabled</TextButton>
);

export const {
  ClickableSecondary,
  DisabledSecondary,
} = decorateStoriesWithTheme({ Clickable, Disabled });

export default {
  title: 'Components/Button/TextButton',
  component: TextButton,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { TextButton } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
  excludeStories: chromaticAwareExcludeStories([
    ClickableSecondary.storyName,
    DisabledSecondary.storyName,
  ]),
} as Meta;
