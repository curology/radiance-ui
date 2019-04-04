# FormSection Component
### Usage

```jsx
import { FormSection, inputStyles, baseInputStyles } from 'radiance-ui';

// FormSection with error message:
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

  validate = value => value.length >= 6;

  render() {
    const { isValid, value } = this.state;
    const css = inputStyles(!isValid, 'focusPrimary');

    return (
      <FormSection
        isValid={isValid}
        label="Example with Validation"
        labelFor="example-validation"
        errorMessage="Must be 6 characters or longer"
      >
        <input
          css={css}
          id="example-validation"
          type="text"
          value={value}
          onChange={this.onChange}
        />
      </FormSection>
    );
  }
}



<FormSection
  label="Example with a Hint"
  labelFor="example-hint"
  hint="This is a Hint message"
  isFocused
>
  <input type="text" id="example-hint" css={baseInputStyles} />
</FormSection>
```

<!-- STORY -->

### Proptypes
| prop                | propType   | required | default      | description                                                                                                                  
|---------------------|------------|----------|--------------|------------------------------------------------------------------------------------------------------------------------------|
| children            | node        | yes      | -        | this is usually an input element |
| displayValidation   | bool        | no       | true     | display the validation message |
| errorMessage        | string      | no       | -        | the message to display when the input is invalid |
| hint                | string      | no       | -        | the hint to display below the field |
| isFocused           | bool        | no       | -        | controls the hint message display |
| isValid             | bool        | no       | -        | controls the valid state of the input |
| label               | string      | no       | -        | The field label |
| labelFor            | string      | no       | -        | must match the field id |

### Notes
The function `inputStyles` takes 2 paramateres: The first one is a boolean telling if the field is valid or not. The second one is the focus border style which maybe `focusPrimary` or `focusSecondary`. The styles returned by the function are to be included in the input styles.

If you dont need focus or errors styles you can just use `baseInputStyles` as shown above in the hints example


