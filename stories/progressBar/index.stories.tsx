import React from 'react';
import { text, select, number, color } from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ProgressBar } from 'src/shared-components';
import { ANIMATION, COLORS, PROGRESS_BAR_STATUS } from 'src/constants';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';

const BarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border: 1px solid ${COLORS.border};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  :before {
    content: 'PAGE CONTENT';
    color: ${COLORS.purple30};
  }
`;

export const Usage = () => (
  <BarContainer>
    <ProgressBar status={PROGRESS_BAR_STATUS.loading} />
  </BarContainer>
);

export const WithCustomStyles = () => {
  const customHeight = 10;

  return (
    <BarContainer>
      <ProgressBar
        status={PROGRESS_BAR_STATUS.loading}
        height={customHeight}
        loadingTime="5s"
        css={css`
          top: calc(50% - ${customHeight / 2}px);
          opacity: 0.5;
        `}
      />
    </BarContainer>
  );
};

export const WithControls = () => (
  <BarContainer>
    <ProgressBar
      backgroundColor={color('backgroundColor', COLORS.background)}
      barColor={color('barColor', COLORS.primary)}
      loadingTime={text('loadingTime', '20s')}
      height={number('height', 4)}
      status={select(
        'status',
        PROGRESS_BAR_STATUS,
        PROGRESS_BAR_STATUS.loading,
      )}
    />
  </BarContainer>
);

WithControls.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  parameters: {
    chromatic: { delay: parseInt(ANIMATION.defaultTiming, 10) },
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { ProgressBar } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;
