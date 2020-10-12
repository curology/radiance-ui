import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { TabsContainer, TabItem } from './style';

type TabType = { id: number; text: string };

type TabsProps = {
  initialActiveTabId?: number;
  onClick?: (tab: TabType) => unknown;
  tabItems: Array<TabType>;
};

export const Tabs = ({
  initialActiveTabId = 1,
  onClick = () => undefined,
  tabItems,
}: TabsProps) => {
  const [activeTabId, setActiveTabId] = useState(initialActiveTabId);

  const onTabClick = (tab: TabType) => {
    setActiveTabId(tab.id);
    onClick(tab);
  };

  return (
    <TabsContainer>
      {tabItems.map((tab) => (
        <TabItem
          active={tab.id === activeTabId}
          key={tab.id}
          onClick={() => onTabClick(tab)}
        >
          {tab.text}
        </TabItem>
      ))}
    </TabsContainer>
  );
};

Tabs.propTypes = {
  initialActiveTabId: PropTypes.number,
  onClick: PropTypes.func,
  tabItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      /**
       * Title of the tab
       */
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
