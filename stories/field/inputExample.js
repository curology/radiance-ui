import React from 'react';

import { Field } from 'src/shared-components';

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

export default InputWithValidation;
