import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { MessageItem } from '../verificationMessages/style';

import Field from './index';

describe('<Field />', () => {
  describe('UI Snapshot', () => {
    it('renders with label prop', () => {
      const labelText = 'Test Label';
      const component = renderer.create(
        <Field label={labelText}>
          <Field.Input />
        </Field>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with label and labelFor', () => {
      const labelText = 'Test Label';
      const labelFor = 'for-input-id';
      const component = renderer.create(
        <Field label={labelText} labelFor={labelFor}>
          <Field.Input />
        </Field>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with custom props', () => {
      const labelText = 'Test Label';
      const labelFor = 'for-input-id';
      const errorMessage = (
        <React.Fragment>
          <strong>Uh Oh!</strong> Type again
        </React.Fragment>
      );
      const component = renderer.create(
        <Field
          label={labelText}
          labelFor={labelFor}
          hideMessagesIcon
          hintMessage="hint message"
          messages={{ error: errorMessage }}
        >
          <Field.Input />
        </Field>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when provided messages', () => {
    it('renders the error messages', () => {
      const messages = { maxLength: 'Maximum 6 characteres' };
      const wrapper = mount(
        <Field messages={messages} messagesType="error">
          <Field.Input />
        </Field>,
      );

      const li = wrapper.find(MessageItem);

      expect(li).toHaveLength(1);
      expect(li.text()).toEqual(messages.maxLength);
    });

    it('renders the success messages', () => {
      const messages = { success: 'Thanks for completing' };
      const wrapper = mount(
        <Field messages={messages} messagesType="success">
          <Field.Input />
        </Field>,
      );

      const li = wrapper.find(MessageItem);

      expect(li).toHaveLength(1);
      expect(li.text()).toEqual(messages.success);
    });
  });
});
