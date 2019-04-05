# BulkErrors Component
### Usage

```jsx
import { BulkErrors, Field } from 'radiance-ui';
    
const errors = {
  required: 'This field is required',
  maxLenght: 'Must be at least 8 characters',
};

<Field.Input type="text" />
<BulkErrors errors={errors} />
```

<!-- STORY -->

### Proptypes
| prop                | propType   | required | default      | description                                                                                                                  
|---------------------|------------|----------|--------------|---------------|
| errors              | object     | yes      | {}           | errors object |
