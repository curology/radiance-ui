import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import {
  text, select, number, boolean, 
} from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import TooltipReadme from 'docs/tooltip';
import { Tooltip, Typography } from 'src/shared-components';
import { SPACER, COLORS } from 'src/constants';

const MainContainer = styled.div`
  text-align: left;
`;

const TooltipContainer = styled.div`
  max-width: 400px;
`;

const TriggerContainer = styled.div`
  background: ${COLORS.purple};
  margin: 0 auto;
  padding: ${SPACER.small};
  color: ${COLORS.white};
  text-align: center;
  width: 100%;
`;

const positionOptions = ['bottom', 'top'];
const arrowAlignOptions = ['left', 'middle', 'right'];

const stories = storiesOf('Tooltip', module);
stories.add(
  'Usage',
  withDocs(TooltipReadme, () => (
    <MainContainer>
      <Typography.Heading>Examples:</Typography.Heading>
      <Tooltip content="Tooltip Content goes here">
        Hover or Click here to trigger the Tooltip with default values
      </Tooltip>
      <br />
      <Tooltip
        hasRestrictedWidth
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur enim diam, eget fringilla neque efficitur eu. Praesent et ornare risus. Aenean in orci posuere, convallis nulla a, posuere dolor."
      >
        Hover or Click here to trigger the Tooltip. This tooltip have a
        restricted width.
      </Tooltip>
      <br />
      <Typography.Title>With custom content</Typography.Title>
      <div
        css={css`
          max-width: auto;
        `}
      >
        <Tooltip
          arrowAlign="left"
          content={
            <span>
              <strong>Did you know?</strong>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              dolore! Esse at, aliquid.
            </span>
          }
        >
          Hover here to trigger the tooltip.
        </Tooltip>
      </div>
      <br />
      <Typography.Title>Small tooltip</Typography.Title>
      <div
        css={css`
          max-width: 328px;
        `}
      >
        <Tooltip content={<strong>3 new</strong>} isSmall arrowAlign="middle">
          Hover here to trigger the small tooltip.
        </Tooltip>
      </div>

      <Typography.Heading
        css={css`
          margin-top: ${SPACER.large};
        `}
      >
        With Knobs:
      </Typography.Heading>

      <TooltipContainer>
        <Tooltip
          alignRightPercent={number('alignRightPercent', 0)}
          alignTopPercent={number('alignTopPercent', 0)}
          arrowAlign={select('arrowAlign', arrowAlignOptions, 'right')}
          content={text('Content', 'This is the tooltip text')}
          defaultOpen={boolean('defaultOpen', false)}
          display={boolean('display', true)}
          hasRestrictedWidth={boolean('hasRestrictedWidth', false)}
          isSmall={boolean('isSmall', false)}
          nudgeRight={number('nudgeRight', 0)}
          nudgeLeft={number('nudgeLeft', 0)}
          nudgeTop={number('nudgeTop', 0)}
          nudgeBottom={number('nudgeBottom', 0)}
          position={select('Position', positionOptions, 'bottom')}
        >
          <TriggerContainer>Trigger element</TriggerContainer>
        </Tooltip>
      </TooltipContainer>
    </MainContainer>
  )),
);
