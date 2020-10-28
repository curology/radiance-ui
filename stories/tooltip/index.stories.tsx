import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Title,
  Stories,
} from '@storybook/addon-docs/blocks';
import {
  text, select, number, boolean, 
} from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import { Tooltip } from 'src/shared-components';
import { SPACER, COLORS } from 'src/constants';
import type { Meta } from '@storybook/react';
import { ArrowAlignTypes, PositionTypes } from 'src/shared-components/tooltip';

const TooltipContainer = styled.div<{ height?: string }>`
  max-width: 800px;
  height: ${({ height = '275px' }) => height};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TriggerContainer = styled.div`
  background: ${COLORS.primary};
  margin: 0 auto;
  padding: ${SPACER.small};
  color: ${COLORS.white};
  text-align: center;
  width: 100%;
`;

const positionOptions = ['bottom', 'top'];
const arrowAlignOptions = ['left', 'middle', 'right'];

export const Default = () => (
  <TooltipContainer>
    <Tooltip defaultOpen content="Tooltip Content goes here">
      This tooltip is always open
    </Tooltip>
    <Tooltip content="Tooltip Content goes here">
      Hover or Click here to trigger the Tooltip with default values
    </Tooltip>
  </TooltipContainer>
);

export const WithRestrictedWidth = () => (
  <TooltipContainer height="375px">
    <Tooltip
      hasRestrictedWidth
      defaultOpen
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur enim diam, eget fringilla neque efficitur eu. Praesent et ornare risus. Aenean in orci posuere, convallis nulla a, posuere dolor."
    >
      This tooltip is always open. This tooltip has a restricted width.
    </Tooltip>
    <Tooltip
      hasRestrictedWidth
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur enim diam, eget fringilla neque efficitur eu. Praesent et ornare risus. Aenean in orci posuere, convallis nulla a, posuere dolor."
    >
      Hover or Click here to trigger the Tooltip. This tooltip has a restricted
      width.
    </Tooltip>
  </TooltipContainer>
);

export const WithCustomContent = () => (
  <TooltipContainer height="325px">
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
      defaultOpen
    >
      This tooltip is always open
    </Tooltip>
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
  </TooltipContainer>
);

export const SmallTooltip = () => (
  <TooltipContainer>
    <Tooltip
      content={<strong>3 new</strong>}
      defaultOpen
      isSmall
      arrowAlign="middle"
    >
      This tooltip is always open
    </Tooltip>
    <Tooltip content={<strong>3 new</strong>} isSmall arrowAlign="middle">
      Hover here to trigger the small tooltip.
    </Tooltip>
  </TooltipContainer>
);

export const WithControls = () => (
  <TooltipContainer>
    <Tooltip
      alignRightPercent={number('alignRightPercent', 0)}
      alignTopPercent={number('alignTopPercent', 0)}
      arrowAlign={
        select('arrowAlign', arrowAlignOptions, 'right') as ArrowAlignTypes
      }
      content={text('Content', 'This is the tooltip text')}
      defaultOpen={boolean('defaultOpen', true)}
      display={boolean('display', true)}
      hasRestrictedWidth={boolean('hasRestrictedWidth', false)}
      isSmall={boolean('isSmall', false)}
      nudgeRight={number('nudgeRight', 0)}
      nudgeLeft={number('nudgeLeft', 0)}
      nudgeTop={number('nudgeTop', 0)}
      nudgeBottom={number('nudgeBottom', 0)}
      position={select('Position', positionOptions, 'bottom') as PositionTypes}
    >
      <TriggerContainer>
        Tooltip open by default (modify defaultOpen prop to test hover)
      </TriggerContainer>
    </Tooltip>
  </TooltipContainer>
);

WithControls.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Tooltip } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;
