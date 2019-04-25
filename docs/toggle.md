# Toggle
### Usage

```jsx
import { Toggle } from 'radiance-ui';

<Toggle
  checked={checked}
  label="Toggle Label"
  onChange={this.onChange}
/>
```

<!-- STORY -->

### Proptypes
| prop                  | propType         | required | default   | description                                                                                                                  
|-----------------------|------------------|----------|-----------|------------------------------------------------------------------------------------------------------------------------------|
| checked     | bool          | yes       | -         | controls the toggle state |
| label       | string        | no        | ''        | the toggle label |
| onChange    | function      | yes       | -         | the toggle handler function, this usually toggle the checked prop value |

### Notes
The `<Toggle>` component is usually wrapped in a `container` element (with a fixed `width` style for example). The toggle and label are spread in the container (`space-between`) from edge to edge.