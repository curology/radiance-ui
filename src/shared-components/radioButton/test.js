import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import RadioButton from './index';

describe('<RadioButton />', () => {
  describe('UI snapshots', () => {
    test('when children is undefined', () => {
      const tree = renderer
        .create(<RadioButton checked={false} onClick={() => {}} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when children is a node', () => {
      const tree = renderer
        .create(
          <RadioButton checked={false} onClick={() => {}}>
            RadioButton Text
          </RadioButton>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    // TODO test for primary and secondary type
  });

  describe('onClick callback', () => {
    it('is invoked on click', () => {
      const spy = jest.fn();
      const wrapper = shallow(<RadioButton checked={false} onClick={spy} />);

      wrapper.simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
