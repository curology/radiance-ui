# Tabs
## Usage

```jsx
import { Tabs } from 'radiance-ui';

const TabsExample = () => {
  const tabItems = [
    { id: 1, text: 'Tab 1' },
    { id: 2, text: 'Tab 2' },
    { id: 3, text: 'Tab 3' },
  ];

  const onClickTab = tab => {
    console.log(tab);
  };

  return (
    <section>
      <Tabs initialActiveTabId={1} tabItems={tabItems} onClick={onClickTab} />
    </section>
  );
};
```

<!-- STORY -->

### Proptypes
| prop                | propType          | required  | default   | description                                                                                                                  
|---------------------|-------------------|-----------|-----------|-------------------------------|
| initialActiveTabId  | number            | no        | 1         | initial tab id to display     |
| onClick             | number            | no        | -         | function to call on tab click |
| tabItems            | array of objects  | yes       | -         | see tabItems properties below |


#### `tabItems` Proptypes
| prop      | propType | description                    |
| --------  | -------- | ------------------------------ |
| id        | number   | the tab indentifier                |
| text      | string   | the title of the tab           |
