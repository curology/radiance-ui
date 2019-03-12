import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import AcneFewGlyph from '../../svgs/glyphs/acne-few-glyph.svg';

import SelectorButton from './index';

describe('<SelectorButton />', () => {
  describe('UI snapshots', () => {
    test('when children is undefined', () => {
      const tree = renderer
        .create(<SelectorButton checked={false} onClick={() => {
        }}/>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when children is a node', () => {
      const tree = renderer
        .create(
          <SelectorButton checked={false} onClick={() => {
          }}>
            SelectorButton Text
          </SelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when checked type is primary', () => {
      const tree = renderer
        .create(
          <SelectorButton checked onClick={() => {
          }} type='primary'>
            SelectorButton Text
          </SelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when checked type is secondary', () => {
      const tree = renderer
        .create(
          <SelectorButton checked onClick={() => {
          }} type='secondary'>
            SelectorButton Text
          </SelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when is checkbox', () => {
      const tree = renderer
        .create(
          <SelectorButton checked={false} onClick={() => {
          }} selector="checkbox">
            SelectorButton Text
          </SelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });


    test('when Icon added', () => {
      const tree = shallow(
        <SelectorButton checked={false} onClick={() => {
        }} selector="checkbox" Icon={<AcneFewGlyph/>}>
          SelectorButton Text
        </SelectorButton>,
      );

      expect(tree).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('is invoked on click', () => {
      const spy = jest.fn();
      const wrapper = shallow(<SelectorButton checked={false} onClick={spy}/>);

      wrapper.simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
