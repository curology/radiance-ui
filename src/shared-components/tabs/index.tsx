import React, { useState } from 'react';

import Style from './style';

export interface TabType {
  id: number;
  text: string;
}

// Hardcoding TabType below to show the actual type in the docs
export interface TabsProps<TabGeneric extends TabType> {
  initialActiveTabId?: number;
  onClick?: (tab: TabGeneric) => unknown;
  tabItems: readonly TabGeneric[];
}

export const Tabs = <TabGeneric extends TabType>({
  initialActiveTabId = 1,
  onClick = () => undefined,
  tabItems,
}: TabsProps<TabGeneric>) => {
  const [activeTabId, setActiveTabId] = useState(initialActiveTabId);

  const onTabClick = (tab: TabGeneric) => {
    setActiveTabId(tab.id);
    onClick(tab);
  };

  return (
    <Style.TabsContainer>
      {tabItems.map((tab) => (
        <Style.TabItem
          active={tab.id === activeTabId}
          key={tab.id}
          onClick={() => {
            onTabClick(tab);
          }}
        >
          {tab.text}
        </Style.TabItem>
      ))}
    </Style.TabsContainer>
  );
};
