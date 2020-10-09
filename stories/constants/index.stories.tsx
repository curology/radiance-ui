import React from 'react';
import {
  Title,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs/blocks';

export * from './availableConstants.stories';
export * from './boxShadows.stories';
export * from './colors.stories';

export default {
  title: 'Constants/CONSTANTS',
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={
              "import { BOX_SHADOWS, COLORS, SPACER } from 'radiance-ui/lib/constants';"
            }
          />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};
