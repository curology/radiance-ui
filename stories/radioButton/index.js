import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import {
  withKnobs, text, boolean, select, 
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';
import RadioButtonReadme from 'docs/radioButton';
import { RadioButton, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';
import { AcneGlyph } from 'src/svgs/glyphs';

const stories = storiesOf('RadioButton', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(RadioButtonReadme, () => (
    <React.Fragment>
      <RadioButton type="primary" checked>
        This is a primary radio button
      </RadioButton>
      <RadioButton type="secondary" checked>
        This is a secondary radio button
      </RadioButton>
      <Typography.Heading
        css={css`
          text-align: left;
          padding: ${SPACER.large} 0 ${SPACER.medium};
        `}
      >
        With Knobs
      </Typography.Heading>
      <RadioButton
        checked={boolean('checked', false)}
        type={select('type', ['primary', 'secondary'], 'primary')}
        onClick={action('radio button clicked')}
        icon={
          boolean('icon', false) ? (
            <AcneGlyph width={40} height={40} fill="#332e54" />
          ) : null
        }
        size={select('size', ['large', 'small'], 'small')}
      >
        {text('children', 'Render radio label here')}
      </RadioButton>
    </React.Fragment>
  )),
);
