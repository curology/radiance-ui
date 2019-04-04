import React from 'react';

import { FormSection, inputStyles } from 'src/shared-components';

class InputExample extends React.Component {
  state = {
    isValid: true,
    value: '',
  };

  onChange = event => {
    const { target } = event.target;
    this.setState({
      isValid: this.validate(target.value),
      value: target.value,
    });
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

export default InputExample;
