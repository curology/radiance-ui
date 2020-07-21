# Option Button

## Usage

```jsx
import { OptionButton } from 'radiance-ui';

<OptionButton
  text="Checkbox helper text"
  onClick={() => undefined}
  optionType="checkbox"
  buttonType="primary"
/>

// With custom Icon and subtext
<OptionButton
  text="Main text"
  subtext="subtext"
  onClick={() => undefined}
  optionType="radio"
  buttonType="primary"
  icon={<PlusIcon />}
/>

// Selected
<OptionButton
  selected
  text="Checkbox helper text"
  onClick={() => undefined}
  optionType="checkbox"
  buttonType="primary"
/>
```

<!-- STORY -->

### Proptypes

| prop       | propType | required | default   | description                                    |
| ---------- | -------- | -------- | --------- | ---------------------------------------------- |
| icon       | node     | no       | -         | show custom icon in the unselected state       |
| text       | string   | yes      | -         | the text label                                 |
| onClick    | function | yes      | -         | function to call when the component is clicked |
| optionType | string   | yes      | -         | must be either: `checkbox` or `radio`          |
| buttonType | string   | no       | `primary` | must be either: `primary` or `secondary`       |
| selected   | bool     | no       | false     | controls the selected state                    |
| subtext    | string   | no       | -         | optional text to display below the main label  |
