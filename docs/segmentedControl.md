# Segmented Control

## Usage

```jsx
import { SegmentedControl } from 'radiance-ui';

class SegmentedControlExample extends React.Component {
  segmentItems = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
    { id: 3, text: 'Option 3' },
  ];

  const onClick = segment => {
    console.log(segment);
  }

  render() {
    return <SegmentedControl initialActiveId={1} segmentItems={this.segmentItems} onClick={onClick} />;
  }
}
```

<!-- STORY -->

### Proptypes

| prop            | propType         | required | default | description                      |
| --------------- | ---------------- | -------- | ------- | -------------------------------- |
| initialActiveId | number           | no       | 1       | initial segment id to display    |
| onClick         | number           | no       | -       | function to call on tab click    |
| segmentItems    | array of objects | yes      | -       | see segmentItem properties below |

#### `segmentItem` Proptypes

| prop | propType | description              |
| ---- | -------- | ------------------------ |
| id   | number   | the segment indentifier  |
| text | string   | the title of the segment |

### Notes

The width of the top-level container is set to 100%, so it will expand to fill its parent container. Set a non-percentage `width` on the parent element during implementation to avoid stretched-out layout or animation effects.
