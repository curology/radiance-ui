import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { withDocs } from 'storybook-readme';
import CalloutReadme from 'docs/callout';
import { Callout, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';
import { NeckGlyph } from 'src/svgs/glyphs';

import { COLORS } from '../../src/constants';

const stories = storiesOf('Callout', module);

stories.addDecorator(withKnobs);

const CalloutContainer = styled.div`
  max-width: 327px;
  margin-bottom: 16px;
`;

stories.add(
  'Usage',
  withDocs(CalloutReadme, () => (
    <React.Fragment>
      <div
        css={css`
          text-align: left;
        `}
      >
        <CalloutContainer>
          <Callout>
            Simple callout with <strong>bolded text</strong>
          </Callout>
        </CalloutContainer>
        <CalloutContainer>
          <Callout color={COLORS.primaryTint2}>
            Callout with a <strong>custom color</strong>
          </Callout>
        </CalloutContainer>
        <p>Callout with an Icon:</p>
        <CalloutContainer>
          <Callout icon={<NeckGlyph width={40} height={40} />}>
            <strong>We recommend</strong> this bundle because you indicated
            concern about <strong>dry skin</strong> and{' '}
            <strong>body acne</strong>
          </Callout>
        </CalloutContainer>
        <Typography.Heading
          css={css`
            padding: ${SPACER.large} 0 ${SPACER.medium};
          `}
        >
          With Knobs
        </Typography.Heading>
        <CalloutContainer>
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
        </CalloutContainer>
      </div>
    </React.Fragment>
  )),
);
