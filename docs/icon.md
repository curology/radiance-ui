# Icon
### Usage

```jsx
import { Icon } from 'radiance-ui';

<Icon width={14} height={14} iconName="camera" />
```

<!-- STORY -->

### Proptypes
| prop      | propType      | required | default        | description                       |
|-----------|---------------|----------|----------------|-----------------------------------|
| iconName  | string        | yes      | -              | id for desired icon               |
| width     | number|string | -        | "16"           |                                   |
| height    | number|string | -        | "16"           |                                   |
| rotate    | number        | -        | "0"            | degrees to for clockwise rotation |
| fill      | string        | -        | COLORS.primary |                                   |
| inline    | bool          | -        | false          |                                   |
| className | string        | -        | ""             |                                   |

### Notes
See **Icon Library** for all available `iconName` options and previews.

In order to add new `iconName` options, add a new SVG to
'src/svgs/icons.svg'

