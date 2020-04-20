import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { COLORS } from '../../constants';
import CameraIcon from '../../svgs/icons/camera-icon.svg';

import Button from './index';

describe('<Button />', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(
          <Button disabled onClick={() => undefined} icon={<CameraIcon />}>
            Button Text
          </Button>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders with adjustable color', () => {
      const button = mount(
        <Button buttonColor={COLORS.statusRed} id="red-button">
          Button Text
        </Button>,
      );

      expect(button.prop('buttonColor')).toEqual(COLORS.statusRed);
    });
  });

  describe('onClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const button = mount(<Button onClick={spy}>Button Text</Button>);

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', () => {
      const spy = jest.fn();
      const button = mount(
        <Button disabled onClick={spy}>
          Button Text
        </Button>,
      );

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });

    it('should not be invoked if loading', () => {
      const spy = jest.fn();
      const button = mount(
        <Button isLoading onClick={spy}>
          Button Text
        </Button>,
      );

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
