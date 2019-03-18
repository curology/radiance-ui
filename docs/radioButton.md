# Radio Button
### Usage

```jsx
import { RadioButton } from 'radiance-ui';

<RadioButton type='primary' checked>
  This is a primary radio button
</RadioButton>
<RadioButton type='secondary' checked>
  This is a secondary radio button
</RadioButton>
```

<!-- STORY -->

### Proptypes
| prop      | propType           | required | default | description                                                                                                                  |
|-----------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| checked   | bool               | yes      | -       | control prop for checked state                                                                                               |
| type      | string             | no       | primary | must be one of: 'primary', 'secondary'                                                                                       |
| icon      | node               | no       | -       | icon optionally displayed inside the radio button                                                                            |                                                                                                 |
| size      | string             | no       | small   | must be one of: 'large', 'small'                                                                                             |                                                                                                 |
| children  | node               | no       | -       | text label displayed next to the radio button                                                                                |
| onClick   | func               | no       | () => {}| callback function called on click of the radio button. This can be used to wire up the controlled component                  |

### Notes
`<RadioButton />` is a controlled component that represents a radio
selection. This means that the `onClick` function should be used to
change the checked state of the radio button. Note that a group of radio
buttons must be composed by a parent component.
