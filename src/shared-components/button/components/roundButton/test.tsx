import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import CameraIcon from '../../../../svgs/icons/camera-icon.svg';

import { RoundButton } from './index';

describe('<RoundButton />', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(
          <RoundButton disabled onClick={() => undefined} icon={<CameraIcon />}>
            Button Text
          </RoundButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <RoundButton onClick={spy} icon={<CameraIcon />}>
          Button Text
        </RoundButton>,
      );

      const button = wrapper.find('button');

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <RoundButton disabled onClick={spy} icon={<CameraIcon />}>
          Button Text
        </RoundButton>,
      );

      const button = wrapper.find('button');

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });

    it('should not be invoked if loading', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <RoundButton isLoading onClick={spy} icon={<CameraIcon />}>
          Button Text
        </RoundButton>,
      );

      const button = wrapper.find('button');

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
