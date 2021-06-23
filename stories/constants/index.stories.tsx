import React from 'react';
import {
  Title,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs';
import type { Meta } from '@storybook/react';

export * from './availableConstants.stories';

const CONSTANTS_STORIES: Meta = {
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
