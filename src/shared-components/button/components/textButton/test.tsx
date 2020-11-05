import React from 'react';
import { mount } from 'src/tests/enzymeHelpers';
import { renderer } from 'src/tests/reactTestRendererHelpers';

import { TextButton } from './index';

describe('<TextButton />', () => {
  describe('UI snapshots', () => {
    it('renders without any props', () => {
      const tree = renderer
        .create(<TextButton>Button Text</TextButton>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('renders with disabled prop', () => {
      const tree = renderer
        .create(<TextButton disabled>Disabled Button Text</TextButton>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('should invoke onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(<TextButton onClick={spy}>Button Text</TextButton>);

      const button = wrapper.find('button');

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should not be clickable if disabled', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <TextButton disabled onClick={spy}>
          Button Text
        </TextButton>,
      );

      const button = wrapper.find('button');

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
