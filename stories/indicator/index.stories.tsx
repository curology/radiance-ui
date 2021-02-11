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
import { useTheme } from '@emotion/react';

export const NumbersAndText = () => (
  <React.Fragment>
    <Indicator text="1" />
    <br />
    <Indicator text={999} />
  </React.Fragment>
);

export const WithColor = () => {
  const theme = useTheme();

  return <Indicator text="+2" backgroundColor={theme.COLORS.primary} />;
};

export const WithControls = () => <Indicator text={text('text', '10')} />;

WithControls.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Components/Indicator',
  component: Indicator,
  parameters: {
    chromatic: { viewports: [BREAKPOINTS.xs] },
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
} as Meta;
