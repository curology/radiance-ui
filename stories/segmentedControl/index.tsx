import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';

import SegmentedControlReadme from 'docs/segmentedControl';

import DefaultControl from './defaultControl';
import { css } from '@emotion/core';
import { SPACER } from 'src/constants';
const stories = storiesOf('SegmentedControl', module);

const threeItems = [
  { id: 1, text: 'Option 1' },
  { id: 2, text: 'Option 2' },
  { id: 3, text: 'Option 3' },
];

const twoItems = [
  { id: 1, text: 'Option 1' },
  { id: 2, text: 'Option 2' },
];

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(SegmentedControlReadme, () => (
    <React.Fragment>
      <div
        css={css`
          margin-bottom: ${SPACER.small};
        `}
      >
        <DefaultControl segmentItems={threeItems} />
      </div>
      <div
        css={css`
          margin-bottom: ${SPACER.small};
        `}
      >
        <DefaultControl width="300px" segmentItems={twoItems} />
      </div>
    </React.Fragment>
  )),
);
