# Chip
## Usage

```jsx
import { Chip } from 'radiance-ui';

<Chip status="success" text="Success" />
<Chip status="error" text="Error" />
<Chip status="pending" text="Pending" />
<Chip status="closed" text="Closed" />
```

<!-- STORY -->

### Proptypes
| prop     | propType           | required | default | description                                                                                                                  |
|----------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| text     | string             | yes      | -       | content of chip |
| status   | string             | yes      | -       | must be one of: 'success', 'error', 'pending', 'closed' |

### Notes
The `<Chip />` component has variations that alert the user of a
particular status with a combination of color and text. This component
does not take any children. Rather, you will need to pass in the content
of the chip as the `text` prop.
