import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Indicator } from 'src/shared-components';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { BREAKPOINTS } from 'src/constants';

export const Usage = () => (
  <React.Fragment>
    <Indicator type="error" text="1" />
    <br />
    <Indicator type="success" text={999} />
    <br />
    <Indicator type="tertiary" text="+4" />
    <br />
    <Indicator type="white" text="String" />
  </React.Fragment>
);

export const WithControls = () => <Indicator text={text('text', '10')} />;

WithControls.parameters = {
  chromatic: { disable: true },
};

const CHROMATIC_OPTIONS = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
} as const;

interface IndicatoriStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
}

const INDICATOR_STORIES: IndicatoriStories = {
  title: 'Components/Indicator',
  component: Indicator,
  parameters: {
    ...CHROMATIC_OPTIONS,
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
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default INDICATOR_STORIES;
