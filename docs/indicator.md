# Indicator

Indicators are used in navigation to help with wayfinding for messages and notifications.

## Usage

```jsx
import { Indicator } from 'radiance-ui';

<Indicator text="1" />
<Indicator text="10" />
<Indicator text={999} />
```

<!-- STORY -->

### Proptypes

| prop | propType         | required | default | description                      |
| ---- | ---------------- | -------- | ------- | -------------------------------- |
| text | string or number | yes      | -       | content of the Indicator element |
