import React from 'react';
import {
  Title,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { BREAKPOINTS } from 'src/constants';

export * from './availableConstants.stories';
export * from './boxShadows.stories';
export * from './colors.stories';

export default {
  title: 'Constants/CONSTANTS',
  parameters: {
    chromatic: { viewports: [BREAKPOINTS.xs] },
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={
              "import { BOX_SHADOWS, SPACER } from 'radiance-ui/lib/constants';"
            }
          />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;
