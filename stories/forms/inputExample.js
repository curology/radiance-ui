import React from 'react';

import { Field } from 'src/shared-components';

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

export default InputWithValidation;
