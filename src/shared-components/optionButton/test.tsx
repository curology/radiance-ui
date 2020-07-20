import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AcneGlyph from '../../svgs/glyphs/acne-glyph.svg';

import OptionButton from './index';

describe('<OptionButton />', () => {
  describe('UI snapshots', () => {
    it('checkbox selected, without custom icon', () => {
      const tree = renderer
        .create(
          <OptionButton
            selected
            onClick={() => undefined}
            text="checkbox text"
            optionType="checkbox"
            buttonType="primary"
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('radio unselected, with icon node prop', () => {
      const tree = renderer
        .create(
          <OptionButton
            onClick={() => undefined}
            text="radio text"
            optionType="radio"
            icon={<AcneGlyph />}
            buttonType="secondary"
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('is invoked when clicked', () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <OptionButton
          onClick={spy}
          text="checkbox text"
          optionType="checkbox"
        />,
      );

      wrapper.simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
