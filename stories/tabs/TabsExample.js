import React from 'react';
import { Tabs } from 'src/shared-components';

const TabsExample = () => {
  const tabItems = [
    { id: 1, text: 'Tab 1' },
    { id: 2, text: 'Tab 2' },
    { id: 3, text: 'Tab 3' },
  ];

  const onClickTab = (tab) => {
    // eslint-disable-next-line no-console
    console.log(tab);
  };

  return (
    <section>
      <Tabs initialActiveTabId={1} tabItems={tabItems} onClick={onClickTab} />
    </section>
  );
};

export default TabsExample;
