import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import {
  withKnobs,
  text,
  select,
  number,
  boolean,
} from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import TooltipReadme from 'docs/tooltip.md';
import { Tooltip, Typography } from 'src/shared-components';
import { SPACING, COLORS } from 'src/constants';

const MainContainer = styled.div`
  text-align: left;
`;

const TooltipContainer = styled.div`
  max-width: 300px;
`;

const TriggerContainer = styled.div`
  background: ${COLORS.purple};
  margin: 0 auto;
  padding: ${SPACING.xsmall};
  color: ${COLORS.white};
  text-align: center;
  width: 100%;
`;

const positionOptions = ['bottom', 'top'];
const arrowAlignOptions = ['left', 'middle', 'right'];

const stories = storiesOf('Tooltip', module);
stories.addDecorator(withKnobs);
stories.add(
  'Usage',
  withDocs(TooltipReadme, () => (
    <MainContainer>
      <Typography.Heading>Example:</Typography.Heading>
      <Tooltip content="Tooltip Content goes here">
        Hover or Click here to trigger the Tooltip with default values
      </Tooltip>

      <Typography.Heading
        css={css`
          margin-top: ${SPACING.base};
        `}
      >
        With Knobs:
      </Typography.Heading>

      <TooltipContainer>
        <Tooltip
          position={select('Position', positionOptions, 'bottom')}
          arrowAlign={select('arrowAlign', arrowAlignOptions, 'right')}
          content={text('Content', 'This is the tooltip text')}
          alignTopPercent={number('alignTopPercent', 0)}
          alignRightPercent={number('alignRightPercent', 0)}
          nudgeRight={number('nudgeRight', 0)}
          nudgeLeft={number('nudgeLeft', 0)}
          nudgeTop={number('nudgeTop', 0)}
          nudgeBottom={number('nudgeBottom', 0)}
          defaultOpen={boolean('defaultOpen', false)}
          display={boolean('display', true)}
        >
          <TriggerContainer>Trigger element</TriggerContainer>
        </Tooltip>
      </TooltipContainer>
    </MainContainer>
  ))
);
