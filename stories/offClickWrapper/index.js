import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';
import { withDocs } from 'storybook-readme';

import { Typography } from 'src/shared-components';
import OffClickWrapperReadme from 'docs/offClickWrapper.md';

import OffClickWrapperExample from './offClickWrapperExample';

const MainContainer = styled.div`
  text-align: left;
`;

const stories = storiesOf('OffClickWrapper', module);
stories.add(
  'Usage',
  withDocs(OffClickWrapperReadme, () => (
    <MainContainer>
      <Typography.Heading>Example:</Typography.Heading>
      <OffClickWrapperExample />
    </MainContainer>
  ))
);
