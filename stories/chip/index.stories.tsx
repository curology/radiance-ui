import React from 'react';
import styled from '@emotion/styled';
import {
  Title,
  Primary,
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs/blocks';
import { Chip } from 'src/shared-components';
import { text, select } from '@storybook/addon-knobs';
import { SPACER } from 'src/constants';

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
  title: 'Chip',
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
          <ArgsTable />
          <Stories />
        </React.Fragment>
      ),
    },
  },
};
