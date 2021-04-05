import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { Field } from './index';

describe('<Field />', () => {
  describe('UI Snapshot', () => {
    /* eslint-disable */
    // it('renders with default props', () => {
    //   const { container } = render(
    //     <Field>
    //       <Field.Input />
    //     </Field>,
    //   );

    //   expect(container.firstElementChild).toMatchSnapshot();
    // });

    // it('renders with label and labelFor props', () => {
    //   const labelText = 'Test Label';
    //   const labelFor = 'for-input-id';
    //   const { container } = render(
    //     <Field label={labelText} labelFor={labelFor}>
    //       <Field.Input />
    //     </Field>,
    //   );

    //   expect(container.firstElementChild).toMatchSnapshot();
    // });
    /* eslint-enable */

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

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });

  describe('when provided some messages', () => {
    it('renders the error message', () => {
      const maxLength = 'Maximum 6 characters';
      const messages = { maxLength };
      const { getAllByText } = render(
        <Field messages={messages} messagesType="error">
          <Field.Input />
        </Field>,
      );

      const message = getAllByText(maxLength);
      expect(message).toHaveLength(1);
    });

    it('renders the success messages', () => {
      const success = 'Thanks for completing';
      const messages = { success: 'Thanks for completing' };
      const { getAllByText } = render(
        <Field messages={messages} messagesType="success">
          <Field.Input />
        </Field>,
      );

      const message = getAllByText(success);
      expect(message).toHaveLength(1);
    });
  });
});
