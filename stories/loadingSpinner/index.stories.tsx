import React from 'react';
import styled from '@emotion/styled';
import { text, number } from '@storybook/addon-knobs';
import { LoadingSpinner } from 'src/shared-components';
import { BREAKPOINTS } from 'src/constants';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { ThemeColors } from 'src/constants/themes/types';
import { useTheme } from 'emotion-theming';

const SpinnerContainer = styled.div`
  position: relative;
  height: 100px;
`;

export const Default = () => (
  <SpinnerContainer>
    <LoadingSpinner />
  </SpinnerContainer>
);

Default.parameters = {
  chromatic: { disable: false },
};

export const WithTranslateX = () => (
  <SpinnerContainer>
    <LoadingSpinner translateX="50px" />
  </SpinnerContainer>
);

export const WithDuration = () => (
  <SpinnerContainer>
    <LoadingSpinner duration={4} />
  </SpinnerContainer>
);

export const WithControls = () => {
  const theme = useTheme();

  return (
    <SpinnerContainer>
      <LoadingSpinner
        bgColor={text('bgColor', theme.COLORS.background) as ThemeColors}
        color={text('color', theme.COLORS.primary) as ThemeColors}
        translateX={text('translateX', '100px')}
        duration={number('duration', 2)}
        size={text('size', '14px')}
      />
    </SpinnerContainer>
  );
};

const CHROMATIC_OPTIONS = {
  chromatic: { disable: true, viewports: [BREAKPOINTS.xs] },
} as const;

interface LoadingSpinnerStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
}

const LOADING_SPINNER_STORIES: LoadingSpinnerStories = {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
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
            code={"import { LoadingSpinner } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default LOADING_SPINNER_STORIES;
