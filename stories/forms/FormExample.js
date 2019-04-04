import React from 'react';

import FormSection, { inputStyles } from 'src/shared-components/forms';

class FormExample extends React.Component {
  state = {
    isValid: true,
    value: '',
  };

  onChange = e => {
    const value = e.target.value;
    this.setState({ isValid: this.validate(value), value });
  };

  validate = value => value.length >= 6;

  render() {
    const { isValid, value } = this.state;
    const css = inputStyles(!isValid);

    return (
      <FormSection
        isValid={isValid}
        label="Example Input"
        labelFor="example"
        errorMessage="Must be 6 characters or longer"
      >
        <input
          css={css}
          id="example"
          type="text"
          value={value}
          onChange={this.onChange}
        />
      </FormSection>
    );
  }
}

export default FormExample;
