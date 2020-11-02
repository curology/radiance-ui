import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'src/tests/decorateWithThemeProvider';

import { LinkButton } from './index';

describe('<LinkButton/>', () => {
  const DecoratedLinkButton = decorateWithThemeProvider(LinkButton);

  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(
          <DecoratedLinkButton onClick={() => undefined} href="#">
            Click me!
          </DecoratedLinkButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('href handling', () => {
    it('should link to a path', () => {
      const wrapper = mount(
        <DecoratedLinkButton href="/some/path">text</DecoratedLinkButton>,
      );

      expect(wrapper.prop('href')).toEqual('/some/path');
    });
  });

  describe('onClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();

      const button = mount(
        <DecoratedLinkButton onClick={spy}>text</DecoratedLinkButton>,
      );

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', () => {
      const spy = jest.fn();

      const button = mount(
        <DecoratedLinkButton disabled href="#" onClick={spy}>
          text
        </DecoratedLinkButton>,
      );

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
