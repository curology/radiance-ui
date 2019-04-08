import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { ErrorItem } from './style';

import Field from './index';

describe('<Field />', () => {
  describe('UI Snapshot', () => {
    it('renders with label prop', () => {
      const labelText = 'Test Label';
      const component = renderer.create(
        <Field label={labelText}>
          <Field.Input />
        </Field>
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
        </Field>
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when provided an error object show the message', () => {
    it('renders the error messages', () => {
      const errors = { maxLength: 'Maximum 6 characteres' };
      const wrapper = mount(
        <Field errors={errors}>
          <Field.Input />
        </Field>
      );
      const li = wrapper.find(ErrorItem);

      expect(li).toHaveLength(1);
      expect(li.text().match(errors.maxLength)).toBeTruthy();
    });
  });
});
