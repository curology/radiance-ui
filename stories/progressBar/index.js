import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import {
  withKnobs, text, select, number, color, 
} from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import ProgressBarReadme from 'docs/progressBar';
import { ProgressBar, Typography } from 'src/shared-components';
import { COLORS, PROGRESS_BAR_STATUS } from 'src/constants';

const MainContainer = styled.div`
  text-align: left;
`;

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
    color: ${COLORS.primaryTint3};
  }
`;

const stories = storiesOf('Progress Bar', module);
stories.addDecorator(withKnobs);

const customHeight = 10;

stories.add(
  'Usage',
  withDocs(ProgressBarReadme, () => (
    <MainContainer>
      <Typography.Heading>Examples:</Typography.Heading>

      <Typography.Title>default props:</Typography.Title>
      <BarContainer>
        <ProgressBar status={PROGRESS_BAR_STATUS.loading} />
      </BarContainer>

      <br />

      <Typography.Title>with customStyles:</Typography.Title>
      <BarContainer>
        <ProgressBar
          status={PROGRESS_BAR_STATUS.loading}
          height={customHeight}
          css={css`
            top: calc(50% - ${customHeight / 2}px);
            opacity: 0.5;
          `}
        />
      </BarContainer>

      <br />

      <Typography.Heading>With Knobs:</Typography.Heading>
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
    </MainContainer>
  )),
);
