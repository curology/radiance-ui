import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Indicator } from 'src/shared-components';

export const NumbersAndText = () => (
  <React.Fragment>
    <Indicator text="1" />
    <br />
    <Indicator text={999} />
  </React.Fragment>
);

export const WithControls = () => <Indicator text={text('text', '10')} />;
