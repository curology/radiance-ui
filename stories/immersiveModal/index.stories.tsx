import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Primary,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { ImmersiveModal } from 'src/shared-components';
import type { Meta } from '@storybook/react';

export * from './withFooterButtons.stories';
export * from './withHeaderImage.stories';
export * from './withScrollingContent.stories';

export default {
  title: 'Components/ImmersiveModal',
  component: ImmersiveModal,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { ImmersiveModal } from 'radiance-ui';"}
          />
          <Primary />
          <ArgsTable />
          <Stories />
        </React.Fragment>
      ),
    },
  },
} as Meta;
