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

  validate = value => (value.length <= 3 ? {} : { maxLenght: 'MAXIMUM REQU' });

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
