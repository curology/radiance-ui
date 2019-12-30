import React from 'react';
// @ts-ignore TODO-TS: remove this when updating storybook version since newest includes types
import { storiesOf } from '@storybook/react';
// @ts-ignore TODO-TS: remove this when updating storybook version since newest includes types
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';

// @ts-ignore
import AccordionReadme from '../../docs/accordion';
import { Accordion, Typography } from '../../src/shared-components';
import { SPACER } from '../../src/constants';
import DefaultAccordion from './defaultAccordion';
import SubcomponentAccordions from './subcomponentAccordions';

const subcomponents = (
  <React.Fragment>
    <Typography.Heading
      css={css`
        padding: ${SPACER.large} 0 ${SPACER.small};
      `}
    >
      Subcomponents
    </Typography.Heading>
    <SubcomponentAccordions />
  </React.Fragment>
);

const accordionWithKnobs = (
  <React.Fragment>
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
  </React.Fragment>
);

const stories = storiesOf('Accordion', module);

stories.addDecorator(withKnobs);

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
        {subcomponents}
        {accordionWithKnobs}
      </div>
    </React.Fragment>
  ))
);
