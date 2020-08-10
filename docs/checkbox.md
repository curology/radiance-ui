# Checkbox

## Usage

```jsx
import { Checkbox } from 'radiance-ui';

<Checkbox type='primary' checked>
 This is a primary checkbox
</Checkbox>
<Checkbox type='secondary' checked>
 This is a secondary checkbox
</Checkbox>
<Checkbox checked disabled>
 This is a disabled checkbox
</Checkbox>
```

 <!-- STORY -->

### Proptypes

| prop     | propType | required | default         | description                                                                                             |
| -------- | -------- | -------- | --------------- | ------------------------------------------------------------------------------------------------------- |
| checked  | bool     | yes      | -               | control prop for checked state                                                                          |
| disabled | bool     | no       | false           | when disabled, click listener will not be called and the UI will look disabled                          |
| type     | string   | no       | primary         | must be one of: 'primary', 'secondary'                                                                  |
| icon     | node     | no       | -               | icon optionally displayed inside the radio button. Icons are only displayed at the 'large' size         |
| size     | string   | no       | small           | must be one of: 'large', 'small'                                                                        |  |
| children | node     | no       | -               | text label displayed next to the checkbox                                                               |
| onClick  | func     | no       | () => undefined | callback function called on click of the checkbox. This can be used to wire up the controlled component |

### Notes

`<Checkbox />` is a controlled component that represents a checkbox
selection. This means that the `onClick` function should be used to
change the checked state of the checkbox. Note that a group of checkbox
buttons must be composed by a parent component.
