import React from 'react';

import { FormSection, inputStyles } from 'src/shared-components';

class InputExample extends React.Component {
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
    const css = inputStyles(!isValid, 'focusSecondary');

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
