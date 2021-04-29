import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Style from './style';

interface TabType {
  id: number;
  text: string;
}

// Hardcoding TabType below to show the actual type in the docs
export interface TabsProps {
  initialActiveTabId?: number;
  onClick?: (tab: TabType) => unknown;
  tabItems: Array<{
    id: number;
    text: string;
  }>;
}

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

Tabs.propTypes = {
  initialActiveTabId: PropTypes.number,
  onClick: PropTypes.func,
  tabItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
