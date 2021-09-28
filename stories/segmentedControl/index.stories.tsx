import React from 'react';
import styled from '@emotion/styled';
import { SegmentedControl } from 'src/shared-components';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { SegmentItemType } from 'src/shared-components/segmentedControl/types';

const SegmentedControlContainer = styled.div<{ segmentedWidth?: number }>`
  width: ${({ segmentedWidth = 500 }) => `${segmentedWidth}px`};
`;

/* eslint-disable no-console */
export const TwoItems = () => {
  const twoItems = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
  ];

  const onClick = (segment: SegmentItemType) => {
    console.log(segment);
  };

  return (
    <SegmentedControlContainer segmentedWidth={344}>
      <SegmentedControl onClick={onClick} segmentItems={twoItems} />
    </SegmentedControlContainer>
  );
};

export const ThreeItems = () => {
  const threeItems = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
    { id: 3, text: 'Option 3' },
  ];

  const onClick = (segment: SegmentItemType) => {
    console.log(segment);
  };

  return (
    <SegmentedControlContainer segmentedWidth={349}>
      <SegmentedControl onClick={onClick} segmentItems={threeItems} />
    </SegmentedControlContainer>
  );
};
/* eslint-enable no-console */

const THEME_STORIES: Meta = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { SegmentedControl } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default THEME_STORIES;
