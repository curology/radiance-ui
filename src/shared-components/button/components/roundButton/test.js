import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CameraIcon from '../../../../svgs/icons/camera-icon.svg';

import RoundButton from './index';

describe('<RoundButton />', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(
          <RoundButton disabled onClick={() => {}} icon={<CameraIcon />}>
            Button Text
          </RoundButton>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const button = shallow(
        <RoundButton onClick={spy} icon={<CameraIcon />}>
          Button Text
        </RoundButton>
      );

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', () => {
      const spy = jest.fn();
      const button = shallow(
        <RoundButton disabled onClick={spy} icon={<CameraIcon />}>
          Button Text
        </RoundButton>
      );

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });

    it('should not be invoked if loading', () => {
      const spy = jest.fn();
      const button = shallow(
        <RoundButton loading onClick={spy} icon={<CameraIcon />}>
          Button Text
        </RoundButton>
      );

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});

