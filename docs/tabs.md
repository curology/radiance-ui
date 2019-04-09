# Tabs
### Usage

```jsx
import { Tabs } from 'radiance-ui';

const Content = styled.div`
  ${TYPOGRAPHY_STYLE.display};
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.bgColor};
  color: ${COLORS.primary};
  height: calc(100vh / 2);
`;

class TabsExample extends React.Component {
  state = {
    activeTabId: 1,
  };

  tabItems = [
    { id: 1, text: 'Tab 1', bgColor: COLORS.postcardGreen },
    { id: 2, text: 'Tab 2', bgColor: COLORS.postcardPeach },
    { id: 3, text: 'Tab 3', bgColor: COLORS.postcardYellow },
  ];

  onClickTab = tab => {
    this.setState({ activeTabId: tab.id });
  };

  renderContent = () => {
    const { activeTabId } = this.state;
    const tab = this.tabItems.find(tabItem => tabItem.id === activeTabId);

    return <Content bgColor={tab.bgColor}>{tab.text}</Content>;
  };

  render() {
    const { activeTabId } = this.state;

    return (
      <section>
        <Tabs
          activeTabId={activeTabId}
          tabItems={this.tabItems}
          onClick={this.onClickTab}
        />
        {this.renderContent()}
      </section>
    );
  }
}
```

<!-- STORY -->

### Proptypes
| prop                | propType          | required  | default   | description                                                                                                                  
|---------------------|-------------------|-----------|-----------|-------------------------------|
| tabItems            | array of objects  | yes       | -         | see tabItems properties below |
| onClick             | number            | no        | -         | function to call on tab click |
| initialActiveTabId  | number            | no        | 1         | initial tab id to display     |


#### `tabItems` Proptypes
| prop      | propType | description                    |
| --------  | -------- | ------------------------------ |
| id        | number   | the tab indentifier                |
| text      | string   | the title of the tab           |
