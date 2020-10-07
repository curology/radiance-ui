import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text, number } from '@storybook/addon-knobs';
import LoadingSpinnerReadme from 'docs/loadingSpinner';
import { LoadingSpinner, Typography } from 'src/shared-components';
import { COLORS } from 'src/constants';

const SpinnerContainer = styled.div`
  position: relative;
  height: 100px;
`;

const stories = storiesOf('LoadingSpinner', module);

stories.add(
  'Usage',
  withDocs(LoadingSpinnerReadme, () => (
    <React.Fragment>
      <div>
        <Typography.Heading>Default</Typography.Heading>
        <SpinnerContainer>
          <LoadingSpinner />
        </SpinnerContainer>
        <br />

        <Typography.Heading>TranslateX as 50px</Typography.Heading>
        <SpinnerContainer>
          <LoadingSpinner translateX="50px" />
        </SpinnerContainer>
        <br />

        <Typography.Heading>Duration as 4</Typography.Heading>
        <SpinnerContainer>
          <LoadingSpinner duration={4} />
        </SpinnerContainer>
        <br />
      </div>

      <br />
      <Typography.Heading>With Knobs</Typography.Heading>
      <SpinnerContainer>
        <LoadingSpinner
          bgColor={text('bgColor', COLORS.background)}
          color={text('color', COLORS.primary)}
          translateX={text('translateX', '100px')}
          duration={number('duration', 2)}
          size={text('size', '14px')}
        />
      </SpinnerContainer>
    </React.Fragment>
  )),
);
