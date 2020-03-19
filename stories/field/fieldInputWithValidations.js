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
