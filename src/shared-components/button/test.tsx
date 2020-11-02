import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'src/tests/decorateWithThemeProvider';
import { primaryTheme } from 'src/constants/themes';

import CameraIcon from '../../svgs/icons/camera-icon.svg';

import { Button } from './index';

describe('<Button />', () => {
  const DecoratedButton = decorateWithThemeProvider(Button);

  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(
          <DecoratedButton
            disabled
            onClick={() => undefined}
            icon={<CameraIcon />}
          >
            Button Text
          </DecoratedButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders with adjustable color', () => {
      const button = mount(
        <DecoratedButton
          buttonColor={primaryTheme.COLORS.error}
          onClick={() => undefined}
          id="red-button"
        >
          Button Text
        </DecoratedButton>,
      );

      expect(button.prop('buttonColor')).toEqual(primaryTheme.COLORS.error);
    });
  });

  describe('onClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const button = mount(
        <DecoratedButton onClick={spy}>Button Text</DecoratedButton>,
      );

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', () => {
      const spy = jest.fn();
      const button = mount(
        <DecoratedButton disabled onClick={spy}>
          Button Text
        </DecoratedButton>,
      );

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });

    it('should not be invoked if loading', () => {
      const spy = jest.fn();
      const button = mount(
        <DecoratedButton isLoading onClick={spy}>
          Button Text
        </DecoratedButton>,
      );

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
