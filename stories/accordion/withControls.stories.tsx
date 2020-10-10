import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Accordion } from 'src/shared-components';

export const WithControls = () => (
  <Accordion.Container>
    <Accordion
      title={
        <Accordion.Content>
          <Accordion.Truncate>{text('Title text', 'Title')}</Accordion.Truncate>
        </Accordion.Content>
      }
      onClick={action('Accordion clicked')}
      isOpen={boolean('isOpen', false)}
      noBorder={boolean('noBorder', false)}
      disabled={boolean('disabled', false)}
      rightAlignArrow={boolean('rightAlignArrow', false)}
    >
      <Accordion.Content>
        {text('Expanded text', 'Accordion expanded content')}
      </Accordion.Content>
    </Accordion>
  </Accordion.Container>
);
