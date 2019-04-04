import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import FormSection from './index';

describe('<FormSection />', () => {
  describe('UI Snapshot', () => {
    it('renders with label prop', () => {
      const labelText = 'Test Label';
      const component = renderer.create(<FormSection label={labelText} />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with label and labelFor', () => {
      const labelText = 'Test Label';
      const labelFor = 'Test For';
      const component = renderer.create(
        <FormSection label={labelText} labelFor={labelFor} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when provided a hint and form is invalid', () => {
    it('renders the hint text', () => {
      const hint = 'This is a hint';
      const wrapper = mount(<FormSection hint={hint} isFocused />);
      const li = wrapper.find('li');

      expect(li).toHaveLength(1);
      expect(li.text().match(hint)).toBeTruthy();
    });
  });
});
