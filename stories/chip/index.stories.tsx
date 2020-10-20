import React from 'react';
import styled from '@emotion/styled';
import {
  ArgsTable,
  Description,
  Heading,
  Primary,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { Chip } from 'src/shared-components';
import { text, select } from '@storybook/addon-knobs';
import { SPACER } from 'src/constants';
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

export default {
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
          <Primary />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories />
        </React.Fragment>
      ),
    },
  },
} as Meta;
