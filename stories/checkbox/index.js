import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import {withKnobs, text, boolean, select, number} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';

import CheckboxReadme from 'docs/checkbox.md';
import { Checkbox, Typography } from 'src/shared-components';
import { SPACING } from 'src/constants';
import { ThumbsUpIcon } from 'src/svgs/icons';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(CheckboxReadme, () => (
    <React.Fragment>
      <Checkbox type='primary' checked>
        This is a primary checkbox
      </Checkbox>
      <Checkbox type='secondary' checked>
        This is a secondary checkbox
      </Checkbox>
      <Typography.Heading css={css`text-align: left; padding: ${SPACING.base} 0 ${SPACING.small};`}>
        With Knobs
      </Typography.Heading>
      <Checkbox
        checked={boolean('checked', false)}
        type={select('type', ['primary', 'secondary'], 'primary')}
        onClick={action('checkbox clicked')}
        icon={boolean('icon', false) ? <ThumbsUpIcon width={16} height={16} fill="#332e54"/>: null}
        iconWidth={number('iconWidth', 16)}
        iconHeight={number('iconHeight', 16)}
      >
        {text('children', 'Render checkbox label here')}
      </Checkbox>
    </React.Fragment>
  ))
);

