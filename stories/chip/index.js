import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { css } from '@emotion/core';

import ChipReadme from 'docs/chip.md';
import { Chip, Typography } from 'src/shared-components';
import { SPACING } from 'src/constants';

const stories = storiesOf('Chip', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(ChipReadme, () => (
    <React.Fragment>
      <div css={css`text-align: left;`}>
        <Chip status="success" text="Success" />
        <Chip status="error" text="Error" />
        <Chip status="pending" text="Pending" />
        <Chip status="closed" text="Closed" />
        <Typography.Heading css={css`padding: ${SPACING.base} 0 ${SPACING.small};`}>
          With Knobs
        </Typography.Heading>
        <Chip
          status={select('status', ['success', 'error', 'pending', 'closed'], 'error')}
          text={text('text', 'WHOOPS!')}
        />
      </div>
    </React.Fragment>
  ))
);


