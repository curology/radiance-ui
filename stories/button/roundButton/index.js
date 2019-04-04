import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';

import RoundButtonReadme from 'docs/button/roundButton.md';
import { RoundButton, Typography } from 'src/shared-components';
import { CheckmarkIcon, ArrowLeftIcon, ArrowRightIcon } from 'src/svgs/icons';
import { SPACING } from 'src/constants';

const RoundButtonStory = withDocs(RoundButtonReadme, () => (
  <React.Fragment>
    <RoundButton.Container multi>
      <RoundButton icon={<CheckmarkIcon />}>Primary</RoundButton>
      <RoundButton buttonType="secondary" icon={<ArrowRightIcon />}>
          Secondary
      </RoundButton>
    </RoundButton.Container>
    <RoundButton.Container multi>
      <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />}>
          Tertiary
      </RoundButton>
      <RoundButton buttonType="quaternary" icon={<ArrowRightIcon />}>
          Quaternary
      </RoundButton>
    </RoundButton.Container>

    <RoundButton.Container multi>
      <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />} disabled>
          Disabled
      </RoundButton>
    </RoundButton.Container>
    <RoundButton.Container multi>
      <RoundButton icon={<ArrowLeftIcon />} loading>
          Primary Loading
      </RoundButton>
      <RoundButton buttonType="secondary" icon={<ArrowRightIcon />} loading>
          Secondary Loading
      </RoundButton>
    </RoundButton.Container>
    <RoundButton.Container multi>
      <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />} loading>
          Tertiary Loading
      </RoundButton>
      <RoundButton buttonType="quaternary" icon={<ArrowRightIcon />} loading>
          Quaternary Loading
      </RoundButton>
    </RoundButton.Container>

    <Typography.Heading css={css`text-align: left; padding: ${SPACING.base} 0 ${SPACING.small};`}>
        With Knobs
    </Typography.Heading>
    <RoundButton.Container>
      <RoundButton
        buttonType={select('buttonType', ['primary', 'secondary', 'tertiary', 'quaternary'], 'primary')}
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
        onClick={action('button clicked')}
        icon={<CheckmarkIcon />}
        textColor={text('textColor', '')}
      >
        {text('children', 'Click me!')}
      </RoundButton>
    </RoundButton.Container>
  </React.Fragment>
));

export default RoundButtonStory;