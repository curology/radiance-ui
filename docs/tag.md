# Alert
### Usage

```jsx
import { Tag } from 'radiance-ui';

<Tag status="success" text="Success" />
<Tag status="error" text="Error" />
<Tag status="pending" text="Pending" />
<Tag status="closed" text="Closed" />
```

<!-- STORY -->

### Proptypes
| prop     | propType           | required | default | description                                                                                                                  |
|----------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| text     | string             | yes      | -       | content of tag |
| status   | string             | yes      | -       | must be one of: 'success', 'error', 'pending', 'closed' |

### Notes
The `<Tag />` component has variations that alert the user of a
particular status with a combination of color and text. This component
does not take any children. Rather, you will need to pass in the content
of the tag as the `text` prop.
