import React from 'react';
import styled from '@emotion/styled';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { Chip } from 'src/shared-components';
import { text, select } from '@storybook/addon-knobs';
import { BREAKPOINTS, SPACER } from 'src/constants';
import type { Meta } from '@storybook/react';

const ChipContainer = styled.div`
  > div {
    margin: ${SPACER.medium};
  }
`;

export const Usage = () => (
  <ChipContainer>
    <Chip status="default" text="Default" />
    <Chip status="error" text="Error" />
    <Chip status="success" text="Success" />
    <Chip status="secondary" text="Secondary" />
  </ChipContainer>
);

Usage.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
};

export const WithControls = () => (
  <Chip
    status={select(
      'status',
      ['default', 'success', 'error', 'secondary'],
      'default',
    )}
    text={text('text', 'Chip')}
  />
);

WithControls.parameters = {
  chromatic: { disable: true },
};

const CHIP_STORIES: Meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source language="tsx" code={"import { Chip } from 'radiance-ui';"} />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default CHIP_STORIES;
