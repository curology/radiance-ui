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
  });

  describe('when provided an error object show the message', () => {
    it('renders the error messages', () => {
      const messages = { maxLength: 'Maximum 6 characteres' };
      const wrapper = mount(
        <Field messages={messages} type="error">
          <Field.Input />
        </Field>,
      );
      const li = wrapper.find(MessageItem);

      expect(li).toHaveLength(1);
      expect(li.text().match(messages.maxLength)).toBeTruthy();
    });
  });

  describe('when provided an success message object show the message', () => {
    it('renders the success messages', () => {
      const messages = { success: 'Thanks for competing this' };
      const wrapper = mount(
        <Field messages={messages} type="success">
          <Field.Input />
        </Field>,
      );
      const li = wrapper.find(MessageItem);

      expect(li).toHaveLength(1);
      expect(li.text().match(messages.maxLength)).toBeTruthy();
    });
  });
});
