import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs';
import { Avatar } from 'src/shared-components';
import accountImg from 'shared/account.png';
import personImg from 'shared/person.jpg';
import { BREAKPOINTS } from 'src/constants';
import type { Meta } from '@storybook/react';

export const Usage = () => (
  <React.Fragment>
    <Avatar
      src={personImg}
      size="small"
      alt="provider"
    />
    <Avatar
      src={personImg}
      size="medium"
      alt="provider"
    />
    <Avatar
      src={personImg}
      size="large"
      alt="provider"
    />
    <Avatar
      src={accountImg}
      size="small"
      alt=""
    />
    <Avatar
      src={accountImg}
      size="medium"
      alt=""
    />
    <Avatar
      src={accountImg}
      size="large"
      alt=""
    />
  </React.Fragment>
);

Usage.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
};

interface AvatarStories extends Meta {
  title: string;
}

const AVATAR_STORIES: AvatarStories = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Avatar } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default AVATAR_STORIES;
