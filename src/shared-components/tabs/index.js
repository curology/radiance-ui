import PropTypes from 'prop-types';
import React from 'react';

import { TabsContainer, TabItem } from './style';

class Tabs extends React.Component {
  static propTypes = {
    initialActiveTabId: PropTypes.number,
    onClick: PropTypes.func,
    tabItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  static defaultProps = {
    initialActiveTabId: 1,
    onClick() {},
  };

  constructor(props) {
    super(props);
    this.state = { activeTabId: props.initialActiveTabId };
  }

  onTabClick = tab => {
    const { onClick } = this.props;
    this.setState({ activeTabId: tab.id });
    onClick(tab);
  };

  render() {
    const { tabItems } = this.props;
    const { activeTabId } = this.state;

    return (
      <TabsContainer>
        {tabItems.map(tab => (
          <TabItem
            active={tab.id === activeTabId}
            key={tab.id}
            onClick={() => this.onTabClick(tab)}
          >
            {tab.text}
          </TabItem>
        ))}
      </TabsContainer>
    );
  }
}

export default Tabs;
