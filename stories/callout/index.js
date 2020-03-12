import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { css } from '@emotion/core';
import { withDocs } from 'storybook-readme';
import CalloutReadme from 'docs/callout';
import { Callout, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';
import { NeckGlyph } from 'src/svgs/glyphs';

import { COLORS } from '../../src/constants';

const stories = storiesOf('Callout', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(CalloutReadme, () => (
    <React.Fragment>
      <div
        css={css`
          text-align: left;
        `}
      >
        <Callout.Container>
          <Callout>
            Simple callout with <strong>bolded text</strong>
          </Callout>
        </Callout.Container>
        <br />
        <Callout.Container>
          <Callout color={COLORS.primaryTint2}>
            Callout with a <strong>custom color</strong>
          </Callout>
        </Callout.Container>
        <br />
        <p>Callout with an Icon:</p>
        <Callout.Container>
          <Callout icon={<NeckGlyph width={48} height={48} />}>
            <strong>We recommend</strong> this bundle because you indicated
            concern about <strong>dry skin</strong> and{' '}
            <strong>body acne</strong>
          </Callout>
        </Callout.Container>
        <br />
        <p>Callout without Container:</p>
        <Callout>
          This Callout will strech 100% the width of the parent container.
        </Callout>
        <Typography.Heading
          css={css`
            padding: ${SPACER.large} 0 ${SPACER.medium};
          `}
        >
          With Knobs
        </Typography.Heading>
        <Callout.Container>
          <Callout
            icon={
              boolean('With Icon', true) ? (
                <NeckGlyph width={40} height={40} />
              ) : null
            }
          >
            {text(
              'text',
              'We recommend this bundle because you indicated concern about dry skin and body acne',
            )}
          </Callout>
        </Callout.Container>
      </div>
    </React.Fragment>
  )),
);
