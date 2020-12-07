import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { Field } from './index';

describe('<Field />', () => {
  describe('UI Snapshot', () => {
    it('renders with default props', () => {
      const { container } = render(
        <Field>
          <Field.Input />
        </Field>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with label and labelFor props', () => {
      const labelText = 'Test Label';
      const labelFor = 'for-input-id';
      const { container } = render(
        <Field label={labelText} labelFor={labelFor}>
          <Field.Input />
        </Field>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with errorMessage, hintMessage and hideMessagesIcon props', () => {
      const errorMessage = (
        <React.Fragment>
          <strong>Uh Oh!</strong> Type again
        </React.Fragment>
      );
      const { container } = render(
        <Field
          hideMessagesIcon
          hintMessage="hint message"
          messages={{ error: errorMessage }}
        >
          <Field.Input />
        </Field>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('when provided some messages', () => {
    it('renders the error message', () => {
      const messages = { maxLength: 'Maximum 6 characteres' };
      const { container } = render(
        <Field messages={messages} messagesType="error">
          <Field.Input />
        </Field>,
      );

      const li = container.querySelectorAll('li');

      expect(li).toHaveLength(1);
      expect(li[0].textContent).toEqual(messages.maxLength);
    });

    it('renders the success messages', () => {
      const messages = { success: 'Thanks for completing' };
      const { container } = render(
        <Field messages={messages} messagesType="success">
          <Field.Input />
        </Field>,
      );

      const li = container.querySelectorAll('li');

      expect(li).toHaveLength(1);
      expect(li[0].textContent).toEqual(messages.success);
    });
  });
});
