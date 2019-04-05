# Field Component
### Usage

```jsx
import { Field } from 'src/shared-components';

// Definition
class InputWithValidation extends React.Component {
  state = {
    isValid: true,
    value: '',
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      isValid: this.validate(value),
      value,
    });
  };

  validate = value => value.length <= 3;

  render() {
    const { isValid, value } = this.state;

    return (
      <Field
        label="Input with Hint and Validation"
        labelFor="input-validation"
        errorMessage="Must be less than 3 characters"
        isValid={isValid}
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
  
  <Field label="Input - disabled">
    <Field.Input disabled />
  </Field>
</div>
```

<!-- STORY -->

### Proptypes
| prop                | propType    | required | default    | description                                                                                                                  
|---------------------|-------------|----------|------------|------------------------------------------------------------------------------------------------------------------------------|
| children            | node        | yes      | -          | must be one of Field.Input or Field.Textarea |
| errorMessage        | string      | no       | -          | the message to display when the input is invalid |
| hintMessage         | string      | no       | -          | the hint to display below the field. It activates on focus |
| isValid             | bool        | no       | -          | controls the valid state of the input |
| label               | string      | no       | -          | the field label |
| labelFor            | string      | no       | -          | must match the children id html attribute |

### Notes
If you don't need validation, label, hint message; you can use Field.Input or Field.Textarea directly.

