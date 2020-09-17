import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text, select } from '@storybook/addon-knobs';
import { css } from '@emotion/core';
import ChipReadme from 'docs/chip';
import { Chip, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';

const stories = storiesOf('Chip', module);

stories.add(
  'Usage',
  withDocs(ChipReadme, () => (
    <React.Fragment>
      <div
        css={css`
          text-align: left;
        `}
      >
        <Chip status="default" text="Default" />
        <br />
        <br />
        <Chip status="error" text="Error" />
        <br />
        <br />
        <Chip status="success" text="Success" />
        <br />
        <br />
        <Chip status="secondary" text="Secondary" />
        <Typography.Heading
          css={css`
            padding: ${SPACER.large} 0 ${SPACER.medium};
          `}
        >
          With Knobs
        </Typography.Heading>
        <Chip
          status={select(
            'status',
            ['default', 'success', 'error', 'secondary'],
            'default',
          )}
          text={text('text', 'Chip')}
        />
      </div>
    </React.Fragment>
  )),
);

const ChipStory = {
  title: 'Chip',
  component: Chip,
};

export default ChipStory;
