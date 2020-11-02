import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'src/tests/decorateWithThemeProvider';

import { TextButton } from './index';

describe('<TextButton />', () => {
  const DecoratedTextButton = decorateWithThemeProvider(TextButton);

  describe('UI snapshots', () => {
    it('renders without any props', () => {
      const tree = renderer
        .create(<DecoratedTextButton>Button Text</DecoratedTextButton>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('renders with disabled prop', () => {
      const tree = renderer
        .create(
          <DecoratedTextButton disabled>
            Disabled Button Text
          </DecoratedTextButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('should invoke onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DecoratedTextButton onClick={spy}>Button Text</DecoratedTextButton>,
      );

      const button = wrapper.find('button');

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should not be clickable if disabled', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DecoratedTextButton disabled onClick={spy}>
          Button Text
        </DecoratedTextButton>,
      );

      const button = wrapper.find('button');

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
