import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styled from '@emotion/styled';
import ToggleReadme from 'docs/toggle';
import { Toggle, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';

import ToggleExample from './toggleExample';

const MainContainer = styled.div`
  text-align: left;
`;

const ToggleContainer = styled.div`
  width: 300px;
  margin: ${SPACER.large} 0;
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
        <Toggle checked={false} label="Unchecked" onChange={() => undefined} />
      </ToggleContainer>
      <ToggleContainer>
        <Toggle checked label="Checked" onChange={() => undefined} />
      </ToggleContainer>
    </MainContainer>
  )),
);

const ToggleStory = {
  title: 'Toggle',
  component: Toggle,
};

export default ToggleStory;
