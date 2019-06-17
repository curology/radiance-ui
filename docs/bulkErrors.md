# BulkErrors Component
## Usage

```jsx
import { BulkErrors, Field } from 'radiance-ui';

const errors = {
  required: 'This field is required',
  maxLength: 'Must be 3 or less characters',
  charactersRequired: ['Must contain 1 number', 'Must contain 1 symbol'],
};

<Field.Input />
<BulkErrors centered errors={errors} />
```

<!-- STORY -->

### Proptypes
| prop                | propType    | required | default    | description                                                                                                                  
|---------------------|-------------|----------|------------|------------------------------------------------------------------------------------------------------------------------------|
| centered            | bool        | no       | false      | center the errors strings |
| errors              | object      | no       | -          | object of key and string message pair. It also accepts an array of string as pair value |
