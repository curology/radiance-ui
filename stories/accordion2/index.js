import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';
import AccordionReadme from 'docs/accordion';
import { Accordion, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';

import DefaultAccordion from './defaultAccordion';

const stories = storiesOf('Accordion With Sidebar README', module);

stories.addDecorator(withKnobs);

stories.addParameters({
  readme: {
    sidebar: AccordionReadme,
  },
});

stories.add('Usage', () => (
  <React.Fragment>
    <div
      css={css`
        text-align: left;
      `}
    >
      <DefaultAccordion />
      <Typography.Heading
        css={css`
          padding: ${SPACER.large} 0 ${SPACER.medium};
        `}
      >
        With Knobs
      </Typography.Heading>
      <div
        css={css`
          width: 400px;
        `}
      >
        <Accordion.Container>
          <Accordion
            title={
              <Accordion.Content>
                <Accordion.Truncate>
                  {text('Title text', 'Title')}
                </Accordion.Truncate>
              </Accordion.Content>
            }
            onClick={action('Accordion clicked')}
            isOpen={boolean('isOpen', false)}
            noBorder={boolean('noBorder', false)}
            disabled={boolean('disabled', false)}
          >
            <Accordion.Content>
              {text('Expanded text', 'Accordion expanded content')}
            </Accordion.Content>
          </Accordion>
        </Accordion.Container>
      </div>
    </div>
  </React.Fragment>
));
