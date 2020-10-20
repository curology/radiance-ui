import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { LinkButton } from './index';

describe('<LinkButton/>', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(
          <LinkButton onClick={() => undefined} href="#">
            Click me!
          </LinkButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('href handling', () => {
    it('should link to a path', () => {
      const wrapper = shallow(<LinkButton href="/some/path">text</LinkButton>);

      expect(wrapper.prop('href')).toEqual('/some/path');
    });
  });

  describe('onClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();

      const button = shallow(<LinkButton onClick={spy}>text</LinkButton>);

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', () => {
      const spy = jest.fn();

      const button = shallow(
        <LinkButton disabled href="#" onClick={spy}>
          text
        </LinkButton>,
      );

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
