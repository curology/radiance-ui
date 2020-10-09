import React from 'react';
import {
  Title,
  Primary,
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs/blocks';
import { ImmersiveModal } from 'src/shared-components';

export * from './withFooterButtons.stories';
export * from './withHeaderImage.stories';
export * from './withScrollingContent.stories';

export default {
  title: 'ImmersiveModal',
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
};
