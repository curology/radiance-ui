import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styled from '@emotion/styled';
import AvatarReadme from 'docs/avatar';
import { Avatar, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';

import accountImg from './account.png';
import personImg from './person.jpg';

const MainContainer = styled.div`
  text-align: left;
`;

const AvatarContainer = styled.div`
  margin: ${SPACER.large} 0 ${SPACER.x2large} 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  ${Avatar} {
    margin-right: ${SPACER.xlarge};
  }
`;

const stories = storiesOf('Avatar', module);

stories.add(
  'Usage',
  withDocs(AvatarReadme, () => (
    <MainContainer>
      <Typography.Heading>Example:</Typography.Heading>

      <AvatarContainer>
        <Avatar src={personImg} alt="avatar" />
        <Avatar size="medium" src={personImg} alt="avatar" />
        <Avatar size="large" src={personImg} alt="avatar" />
      </AvatarContainer>
      <br />
      <Typography.Heading>
        Examples with partially transparent images:
      </Typography.Heading>
      <AvatarContainer>
        <Avatar src={accountImg} alt="avatar" />
        <Avatar size="medium" src={accountImg} alt="avatar" />
        <Avatar size="large" src={accountImg} alt="avatar" />
      </AvatarContainer>
    </MainContainer>
  )),
);
