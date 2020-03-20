# Chip

Chips should be used in small spaces to add value to the elements they're nested in. (i.e. "Recommended" on product cards or showing an error on an element in a list.)

These chips can be either Default, Success, or Error. The Secondary is an inverse of the primary chip and should be used on top of photos or illustrations.

## Usage

```jsx
import { Chip } from 'radiance-ui';

<Chip status="default" text="Default" />
<Chip status="error" text="Error" />
<Chip status="success" text="Success" />
<Chip status="secondary" text="Secondary" />
```

<!-- STORY -->

### Proptypes

| prop   | propType | required | default | description                                                |
| ------ | -------- | -------- | ------- | ---------------------------------------------------------- |
| text   | string   | yes      | -       | content of chip                                            |
| status | string   | no       | default | must be one of: 'default', 'success', 'error', 'secondary' |
