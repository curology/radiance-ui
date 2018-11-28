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

    test('when checked type is primary', () => {
      const tree = renderer
        .create(
          <RadioButton checked onClick={() => {}} type='primary'>
            RadioButton Text
          </RadioButton>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when checked type is secondary', () => {
      const tree = renderer
        .create(
          <RadioButton checked onClick={() => {}} type='secondary'>
            RadioButton Text
          </RadioButton>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
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
