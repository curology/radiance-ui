# Field Component
### Usage

```jsx
import { Field } from 'radiance-ui';

// Definition
class InputWithValidation extends React.Component {
  state = {
    errors: {},
    value: '',
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      errors: this.validate(value),
      value,
    });
  };

  validate = value => {
    const requiredError =
      value.length === 0 ? { required: 'This field is required' } : {};

    const maxLengthError =
      value.length > 3 ? { maxLength: 'Must be 3 or less characters' } : {};

    const numberRegExp = /\d/;
    const numberRequiredError = numberRegExp.test(value)
      ? {}
      : { numberRequired: 'Must contain at least 1 number' };
    const val = { ...requiredError, ...maxLengthError, ...numberRequiredError };
    return val;
  };

  render() {
    const { value, errors } = this.state;

    return (
      <Field
        label="Input with Hint and Validation"
        labelFor="input-validation"
        errors={errors}
        hintMessage="This hint appears on focus"
      >
        <Field.Input
          id="input-validation"
          type="text"
          value={value}
          onChange={this.onChange}
        />
      </Field>
    );
  }
}

....

// Render Usage
<div>
  <InputWithValidation />
  
  <Field label="Textarea - no hint - no validation" labelFor="textarea-id">
    <Field.Textarea id="textarea-id" />
  </Field>
  

  <Field.Input placeholder="You can use Field.Input directly" />

  <Field label="Input - disabled">
    <Field.Input disabled />
  </Field>
</div>
```

<!-- STORY -->

### Proptypes
| prop                | propType    | required | default    | description                                                                                                                  
|---------------------|-------------|----------|------------|------------------------------------------------------------------------------------------------------------------------------|
| children            | element     | yes      | -          | must be either `Field.Input` or `Field.Textarea` |
| errors              | object      | no       | -          | object of key and string message pair. It also accepts an array of string as pair value |
| hintMessage         | string      | no       | -          | the hint to display below the field. It activates on focus |
| label               | string      | no       | -          | the field label |
| labelFor            | string      | no       | -          | must match the children id html attribute |

### Notes
If you don't need validation, label or hint message; you can use `Field.Input` or `Field.Textarea` without the `Field` wrapper.
