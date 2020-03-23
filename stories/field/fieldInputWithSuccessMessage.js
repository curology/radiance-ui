import React from 'react';
import { Field } from 'src/shared-components';

class FieldInputWithSuccessMessage extends React.Component {
  state = {
    messages: {},
    value: '',
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      messages: this.validate(value),
      value,
    });
  };

  validate = value =>
    value.length > 0
      ? { successMessage: 'Thanks for completing this field' }
      : {};

  render() {
    const { value, messages } = this.state;

    return (
      <Field
        label="Input with success message"
        labelFor="input-success"
        messages={messages}
        messagesType="success"
      >
        <Field.Input
          id="input-success"
          type="text"
          value={value}
          onChange={this.onChange}
        />
      </Field>
    );
  }
}

export default FieldInputWithSuccessMessage;
