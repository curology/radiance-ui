# Field Component

Field component uses VerificationMessages component internally along with extra styling for the input.

## Usage

```jsx
import { Field } from 'radiance-ui';

// Definition
import React from 'react';
import { Field } from 'src/shared-components';

class FieldInputWithValidations extends React.Component {
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
      value.length > 3
        ? {
            maxLength: (
              <React.Fragment>
                <strong>Uh oh!</strong> Must be 3 or less characters
              </React.Fragment>
            ),
          }
        : {};

    const numberRegExp = /\d/;
    const numberRequiredError = numberRegExp.test(value)
      ? {}
      : {
          numberRequired: (
            <React.Fragment>
              <strong>Uh oh!</strong> Must contain at least 1 number
            </React.Fragment>
          ),
        };

    const val = { ...requiredError, ...maxLengthError, ...numberRequiredError };
    return val;
  };

  render() {
    const { value, errors } = this.state;

    return (
      <Field
        label="Input with validations"
        labelFor="input-validation"
        errors={errors}
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

export default FieldInputWithValidations;

....

// Render Usage
<div>
  <FieldInputWithValidations />

  <FieldInputWithSuccessMessage />

  <Field
    label="Input with a Hint"
    labelFor="input-hint"
    hintMessage="This hint appears on focus"
  >
    <Field.Input id="input-hint" type="text" />
  </Field>

  <Field label="Textarea" labelFor="textarea-id">
    <Field.Textarea id="textarea-id" />
  </Field>

  <Field
    label="Textarea with a success message and hidden icon"
    labelFor="textarea-id"
    messages={{ successMessage: 'Thanks for your feedback' }}
    messagesType="success"
    hideMessagesIcon
  >
    <Field.Textarea id="textarea-id" value="some answer" />
  </Field>


  <Field label="Input - disabled" disabled>
    <Field.Input />
  </Field>

  <Field.Input placeholder="You can use Field.Input directly" />
</div>
```

<!-- STORY -->

### Proptypes

| prop             | propType | required | default | description                                                                                |
| ---------------- | -------- | -------- | ------- | ------------------------------------------------------------------------------------------ |
| children         | element  | yes      | -       | must be either `Field.Input` or `Field.Textarea`                                           |
| disabled         | bool     | no       | false   | change the child input to `disabled` state                                                 |
| messages         | object   | no       | -       | object of key and React Node message pair. It also accepts an array of React Node as value |
| messagesType     | string   | no       | error   | one of `error` or `success`                                                                |
| hideMessagesIcon | bool     | no       | false   | hides the message icon at the rightmost part of the input                                  |
| hintMessage      | string   | no       | -       | the hint to display below the field. It activates on focus                                 |
| label            | string   | no       | -       | the field label                                                                            |
| labelFor         | string   | no       | -       | must match the children id html attribute                                                  |

### Notes

If you don't need validation, label or hint message; you can use `Field.Input` or `Field.Textarea` directly without the `Field` wrapper.
