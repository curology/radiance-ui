# BulkErrors Component
### Usage

```jsx
import { BulkErrors, Field } from 'radiance-ui';
    
const errors = {
  required: 'This field is required',
  maxLength: 'Must be at least 8 characters',
};

<div>
  <Field.Input type="text" />
  <BulkErrors errors={errors} />
</div>
```

<!-- STORY -->

### Proptypes
| prop                | propType   | required | default      | description                                                                                                                  
|---------------------|------------|----------|--------------|---------------|
| errors              | object     | yes      | {}           | errors object |
