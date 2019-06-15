# Tooltip
## Usage

```jsx
import { Tooltip } from 'radiance-ui';

<Tooltip content="Tooltip Content goes here">
  Hover or Click here to trigger the Tooltip with default values
</Tooltip>
```

<!-- STORY -->

### Proptypes
| prop                  | propType         | required | default   | description                                                                                                                  
|-----------------------|------------------|----------|-----------|------------------------------------------------------------------------------------------------------------------------------|
| alignRightPercent     | number           | no      | -         | adjust position using % |
| alignTopPercent       | number           | no      | -         | adjust position using % |
| arrowAlign            | string           | no      | 'middle'  | must be one of: 'left', 'middle', 'right' |
| children              | node             | yes     | -         | content of the trigger element displayed on page |
| content               | node             | yes     | ''        | content of the tooltip |
| nudgeLeft             | number           | no      | 0         | adjust position using px |
| nudgeRight            | number           | no      | 0         | adjust position using px |
| nudgeTop              | number           | no      | 0         | adjust position using px |
| nudgeBottom           | number           | no      | 0         | adjust position using px |
| position              | string           | no      | 'top'     | must be one of: 'top', 'bottom' |
| defaultOpen           | bool             | no      | false     | show the tooltip without the need of the trigger  |
| display               | bool             | no      | true      | programatically control the tooltip to never show (false) or function as normal (true) |
