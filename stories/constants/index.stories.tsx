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

export default {
  title: 'CONSTANTS/Constants',
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
            code={"import { SPACER } from 'radiance-ui/lib/constants';"}
          />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;
