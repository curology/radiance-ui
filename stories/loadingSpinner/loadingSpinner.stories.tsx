import React from 'react';
import styled from '@emotion/styled';
import { text, number } from '@storybook/addon-knobs';
import { LoadingSpinner } from 'src/shared-components';
import { COLORS } from 'src/constants';

const SpinnerContainer = styled.div`
  position: relative;
  height: 100px;
`;

export const Default = () => (
  <SpinnerContainer>
    <LoadingSpinner />
  </SpinnerContainer>
);

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

export const WithControls = () => (
  <SpinnerContainer>
    <LoadingSpinner
      bgColor={text('bgColor', COLORS.background)}
      color={text('color', COLORS.primary)}
      translateX={text('translateX', '100px')}
      duration={number('duration', 2)}
      size={text('size', '14px')}
    />
  </SpinnerContainer>
);
