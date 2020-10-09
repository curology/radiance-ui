import React from 'react';
import { text, select, number, boolean } from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import { Tooltip } from 'src/shared-components';
import { SPACER, COLORS } from 'src/constants';
import {
  Canvas,
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';

const TooltipContainer = styled.div<{ height?: string }>`
  max-width: 400px;
  height: ${({ height = '175px' }) => height};
  display: flex;
  align-items: center;
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

export const Default = ({ defaultOpen = true }) => (
  <TooltipContainer>
    <Tooltip defaultOpen={defaultOpen} content="Tooltip Content goes here">
      Hover or Click here to trigger the Tooltip with default values
    </Tooltip>
  </TooltipContainer>
);

export const WithRestrictedWidth = ({ defaultOpen = true }) => (
  <TooltipContainer height="375px">
    <Tooltip
      hasRestrictedWidth
      defaultOpen={defaultOpen}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur enim diam, eget fringilla neque efficitur eu. Praesent et ornare risus. Aenean in orci posuere, convallis nulla a, posuere dolor."
    >
      Hover or Click here to trigger the Tooltip. This tooltip have a restricted
      width.
    </Tooltip>
  </TooltipContainer>
);

export const WithCustomContent = ({ defaultOpen = true }) => (
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
      defaultOpen={defaultOpen}
    >
      Hover here to trigger the tooltip.
    </Tooltip>
  </TooltipContainer>
);

export const SmallTooltip = ({ defaultOpen = true }) => (
  <TooltipContainer>
    <Tooltip
      content={<strong>3 new</strong>}
      defaultOpen={defaultOpen}
      isSmall
      arrowAlign="middle"
    >
      Hover here to trigger the small tooltip.
    </Tooltip>
  </TooltipContainer>
);

/**
 * We purposefully leave thiis out of the canvas since it is just for testing
 */
const WithControls = () => (
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
);

/**
 * Storybook does not apply our global styles when using parameters.docs.page *without* <Stories />.
 *
 * This is potentially a bug in the library, but in the meantime this maintains the desired styling.
 */
const PRESERVE_STYLES = () => (
  <div style={{ display: 'none' }}>
    <Stories includePrimary={false} />
  </div>
);

/**
 * NOTE: We defaultOpen the tooltips on the separate canvas stories for visual
 * regression testing, but maintain the normal behavior for the docs page.
 */
export default {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Subtitle />
          <Description />
          <Description>
            Note: the source is not available on the docs page, only the add-on
            panel “Story” tab of each Canvas story
          </Description>
          <Canvas withToolbar>
            <Default defaultOpen={false} />
          </Canvas>
          <ArgsTable />
          <Canvas withToolbar>
            <WithRestrictedWidth defaultOpen={false} />
          </Canvas>
          <Canvas withToolbar>
            <WithCustomContent defaultOpen={false} />
          </Canvas>
          <Canvas withToolbar>
            <SmallTooltip defaultOpen={false} />
          </Canvas>
          <Canvas withToolbar>
            <WithControls />
          </Canvas>
          <PRESERVE_STYLES />
        </React.Fragment>
      ),
    },
  },
} as Meta;
