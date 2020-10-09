import React from 'react';
import { Tabs } from 'src/shared-components';
import {
  Title,
  Description,
  ArgsTable,
  Heading,
  Source,
  Primary,
} from '@storybook/addon-docs/blocks';

export const Usage = () => {
  const tabItems = [
    { id: 1, text: 'Tab 1' },
    { id: 2, text: 'Tab 2' },
    { id: 3, text: 'Tab 3' },
  ];

  const onClickTab = (tab: { id: number; text: string }) => {
    // Add any additional callbacks here
    console.log(tab); // eslint-disable-line
  };

  return (
    <section>
      <Tabs initialActiveTabId={1} tabItems={tabItems} onClick={onClickTab} />
    </section>
  );
};

export default {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Tabs } from 'radiance-ui';"}
          />
          <Primary />
          <ArgsTable />
        </React.Fragment>
      ),
    },
  },
};
