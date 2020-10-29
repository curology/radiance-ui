import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import CameraIcon from '../../../../svgs/icons/camera-icon.svg';

import { RoundButton } from './index';

describe('<RoundButton />', () => {
  const DecoratedRoundButton = decorateWithThemeProvider(RoundButton);

  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(
          <DecoratedRoundButton
            disabled
            onClick={() => undefined}
            icon={<CameraIcon />}
          >
            Button Text
          </DecoratedRoundButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DecoratedRoundButton onClick={spy} icon={<CameraIcon />}>
          Button Text
        </DecoratedRoundButton>,
      );

      const button = wrapper.find('button');

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DecoratedRoundButton disabled onClick={spy} icon={<CameraIcon />}>
          Button Text
        </DecoratedRoundButton>,
      );

      const button = wrapper.find('button');

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });

    it('should not be invoked if loading', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DecoratedRoundButton isLoading onClick={spy} icon={<CameraIcon />}>
          Button Text
        </DecoratedRoundButton>,
      );

      const button = wrapper.find('button');

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
