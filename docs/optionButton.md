# Option Button
### Usage

```jsx
import { OptionButton } from 'radiance-ui';

<OptionButton
  text="Checkbox helper text"
  onClick={() => {}}
  optionType="checkbox"
  type="primary"
/>

// With custom Icon
<OptionButton
  text="Checkbox helper text"
  onClick={() => {}}
  optionType="checkbox"
  type="primary"
  icon={<AcneGlyph width={32} height={32} />}
/>

// Selected
<OptionButton
  selected
  text="Checkbox helper text"
  onClick={() => {}}
  optionType="checkbox"
  type="primary"
/>
```

<!-- STORY -->

### Proptypes
| prop                  | propType         | required | default   | description                                                                                                                  
|-----------------------|------------------|----------|-----------|------------------------------------------------------------------------------------------------------------------------------|
| icon          | node           | no      | -          | show custom icon in the unselected state |
| text          | string         | yes     | -          | the text label |
| onClick       | function       | yes     | -          | function to call when the component is clicked |
| optionType    | string         | yes     | -          | must be either: `checkbox` or `radio` |
| type     | string         | no      | `primary`  | must be either: `primary` or `secondary` |
| selected      | bool           | no      | false      | controls the selected state  |
