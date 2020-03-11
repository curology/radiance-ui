import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { css } from '@emotion/core';
import { withDocs } from 'storybook-readme';
import IndicatorReadme from 'docs/indicator';
import { Indicator, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';

const stories = storiesOf('Indicator', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(IndicatorReadme, () => (
    <React.Fragment>
      <div
        css={css`
          text-align: left;
        `}
      >
        <Indicator text="1" />
        <br />
        <Indicator text="10" />
        <br />
        <Indicator text={999} />
        <Typography.Heading
          css={css`
            padding: ${SPACER.large} 0 ${SPACER.medium};
          `}
        >
          With Knobs
        </Typography.Heading>
        <Indicator text={text('text', '10')} />
      </div>
    </React.Fragment>
  )),
);
