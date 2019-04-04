# BulkErrors Component
### Usage

```jsx
import { BulkErrors, baseInputStyles } from 'radiance-ui';
    
const errors = {
  required: 'This field is required',
  maxLenght: 'Must be at least 8 characters',
};

<input type="text" css={baseInputStyles} />
<BulkErrors errors={errors} />
```

<!-- STORY -->

### Proptypes
| prop                | propType   | required | default      | description                                                                                                                  
|---------------------|------------|----------|--------------|---------------|
| errors              | object     | yes      | {}           | errors object |
