# Icon
### Usage

```jsx
import { CameraIcon } from 'radiance-ui/lib/icons';

<CameraIcon width={16} height={16} />
```

<!-- STORY -->

### Proptypes
| prop      | propType           | required | default        | description                       |
|-----------|--------------------|----------|----------------|-----------------------------------|
| width     | number&#124;string | -        | "16"           |                                   |
| height    | number&#124;string | -        | "16"           |                                   |
| rotate    | number             | -        | "0"            | degrees to for clockwise rotation |
| fill      | string             | -        | COLORS.primary |                                   |
| inline    | bool               | -        | false          |                                   |
| className | string             | -        | ""             |                                   |

### Notes
See **Icon Library** for all available icon components and previews.

In order to add new icon, add an svg file to `src/svgs/icons/` directory.

