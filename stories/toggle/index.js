import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styled from '@emotion/styled';

import ToggleReadme from 'docs/toggle.md';
import { Toggle, Typography } from 'src/shared-components';
import { SPACING } from 'src/constants';

import ToggleExample from './toggleExample';

const MainContainer = styled.div`
  text-align: left;
`;

const ToggleContainer = styled.div`
  width: 300px;
  margin: ${SPACING.base} 0;
`;

const stories = storiesOf('Toggle', module);

stories.add(
  'Usage',
  withDocs(ToggleReadme, () => (
    <MainContainer>
      <Typography.Heading>Examples:</Typography.Heading>

      <ToggleContainer>
        <ToggleExample />
      </ToggleContainer>
      <ToggleContainer>
        <Toggle checked={false} label="Unchecked" onChange={() => {}} />
      </ToggleContainer>
      <ToggleContainer>
        <Toggle checked label="Checked" onChange={() => {}} />
      </ToggleContainer>
    </MainContainer>
  ))
);
