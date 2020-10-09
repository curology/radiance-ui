import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Indicator } from 'src/shared-components';
import {
  Title,
  Primary,
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs/blocks';

export const NumbersAndText = () => (
  <React.Fragment>
    <Indicator text="1" />
    <br />
    <Indicator text={999} />
  </React.Fragment>
);

export const WithControls = () => <Indicator text={text('text', '10')} />;

export default {
  title: 'Indicator',
  component: Indicator,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Indicator } from 'radiance-ui';"}
          />
          <Primary />
          <ArgsTable />
          <Stories />
        </React.Fragment>
      ),
    },
  },
};
