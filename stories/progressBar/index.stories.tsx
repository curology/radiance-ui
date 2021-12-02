import React from 'react';
import { text, select, number, color } from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { ProgressBar } from 'src/shared-components';
import { ANIMATION, PROGRESS_BAR_STATUS } from 'src/constants';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs';
import type { Meta } from '@storybook/react';
import type { ThemeColors } from 'src/constants/themes/types';

const BarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.COLORS.border};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  :before {
    content: 'PAGE CONTENT';
    color: ${({ theme }) => theme.COLORS.primaryTint3};
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

export const WithControls = () => {
  const theme = useTheme();

  return (
    <BarContainer>
      <ProgressBar
        backgroundColor={
          color('backgroundColor', theme.COLORS.background) as ThemeColors
        }
        barColor={color('barColor', theme.COLORS.primary) as ThemeColors}
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
};

WithControls.parameters = {
  chromatic: { disable: true },
};

const CHROMATIC_OPTIONS = {
  chromatic: { delay: parseInt(ANIMATION.defaultTiming, 10) * 15 },
} as const;

interface ProgressBarStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
  title: string;
}

const PROGRESS_BAR_STORIES: ProgressBarStories = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    ...CHROMATIC_OPTIONS,
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
};

export default PROGRESS_BAR_STORIES;
