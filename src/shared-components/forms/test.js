import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { ErrorItem } from './helperText/style';

import Field from './index';

describe('<Field />', () => {
  describe('UI Snapshot', () => {
    it('renders with label prop', () => {
      const labelText = 'Test Label';
      const component = renderer.create(<Field label={labelText} />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with label and labelFor', () => {
      const labelText = 'Test Label';
      const labelFor = 'Test For';
      const component = renderer.create(
        <Field label={labelText} labelFor={labelFor} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when provided an errorMessage and field is invalid show the message', () => {
    it('renders the error message', () => {
      const errorMessage = 'Maximum 6 characteres';
      const wrapper = mount(
        <Field errorMessage={errorMessage} isValid={false} />
      );
      const li = wrapper.find(ErrorItem);

      expect(li).toHaveLength(1);
      expect(li.text().match(errorMessage)).toBeTruthy();
    });
  });
});
