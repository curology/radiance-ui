import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import TabsReadme from 'docs/tabs.md';
import { Typography } from 'src/shared-components';

import TabsExample from './TabsExample';

const MainContainer = styled.div`
  text-align: left;
`;

const stories = storiesOf('Tabs', module);
stories.add(
  'Usage',
  withDocs(TabsReadme, () => (
    <MainContainer>
      <Typography.Heading>Example:</Typography.Heading>
      <TabsExample />
    </MainContainer>
  ))
);
