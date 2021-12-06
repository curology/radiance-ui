import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs';
import { TextButton } from 'src/shared-components';
import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';

export const Clickable = () => (
  <TextButton onClick={action('Button was clicked')}>
    All of this text is clickable
  </TextButton>
);

export const Disabled = () => (
  <TextButton disabled>This text button is disabled</TextButton>
);

interface TextButtonStories extends Meta {
  title: string;
}

const TEXT_BUTTON_STORIES: TextButtonStories = {
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
};

export default TEXT_BUTTON_STORIES;
