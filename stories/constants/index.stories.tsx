import React from 'react';
import {
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs';
import type { Meta } from '@storybook/react';

export * from './availableConstants.stories';

interface ConstantsStories extends Meta {
  title: string;
}

const CONSTANTS_STORIES: ConstantsStories = {
  title: 'CONSTANTS/Constants',
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { SPACER } from 'radiance-ui/lib/constants';"}
          />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default CONSTANTS_STORIES;
