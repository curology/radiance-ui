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
import { FocusScope, useFocusManager } from '@react-aria/focus';

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

interface SegmentedControlWithFocusScopeProps {
  onClick: (segment: SegmentItemType) => void;
  segmentItems: SegmentItemType[];
}

const SegmentedControlWithFocusScope: React.FC<SegmentedControlWithFocusScopeProps> =
  ({ onClick, segmentItems }) => {
    const focusManager = useFocusManager();

    React.useEffect(() => {
      focusManager.focusLast({ wrap: true });
    }, []);

    return <SegmentedControl onClick={onClick} segmentItems={segmentItems} />;
  };

/**
 * TODO: Add regression test to currently-active tab focus state after figuring out why it does not
 * work by default (z-index, disabled buttons, etc.)
 */
export const TwoItemsWithFocusOnLastItem = () => {
  const twoItems = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
  ];

  const onClick = (segment: SegmentItemType) => {
    console.log(segment);
  };

  return (
    <SegmentedControlContainer segmentedWidth={344}>
      <FocusScope autoFocus contain restoreFocus>
        <SegmentedControlWithFocusScope
          onClick={onClick}
          segmentItems={twoItems}
        />
      </FocusScope>
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

export const ThreeItemsWithFocusOnLastItem = () => {
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
      <FocusScope autoFocus contain restoreFocus>
        <SegmentedControlWithFocusScope
          onClick={onClick}
          segmentItems={threeItems}
        />
      </FocusScope>
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
