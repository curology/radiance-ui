import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';
import { Accordion, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';
import AccordionReadme from 'docs/accordion';

import DefaultAccordion from './defaultAccordion';
import SubcomponentAccordions from './subcomponentAccordions';

const stories = storiesOf('Accordion', module);

stories.add(
  'Usage',
  withDocs(AccordionReadme, () => (
    <React.Fragment>
      <div
        css={css`
          text-align: left;
        `}
      >
        <Typography.Heading
          css={css`
            padding: ${SPACER.small} 0 ${SPACER.small};
          `}
        >
          Components
        </Typography.Heading>
        <DefaultAccordion />

        <Typography.Heading
          css={css`
            padding: ${SPACER.large} 0 ${SPACER.small};
          `}
        >
          Subcomponents
        </Typography.Heading>
        <SubcomponentAccordions />

        <Typography.Heading
          css={css`
            padding: ${SPACER.small} 0 ${SPACER.small};
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
              rightAlignArrow={boolean('rightAlignArrow', false)}
            >
              <Accordion.Content>
                {text('Expanded text', 'Accordion expanded content')}
              </Accordion.Content>
            </Accordion>
          </Accordion.Container>
        </div>
      </div>
    </React.Fragment>
  )),
);
