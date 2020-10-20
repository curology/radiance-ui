import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Primary,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
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
          <Primary />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories />
        </React.Fragment>
      ),
    },
  },
} as Meta;
