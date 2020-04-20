import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AcneOneGlyph from '../../svgs/glyphs/acne-one-glyph.svg';

import SelectorButton from './index';

describe('<SelectorButton />', () => {
  describe('UI snapshots', () => {
    test('when children is undefined', () => {
      const tree = renderer
        .create(<SelectorButton checked={false} onClick={() => {}} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when children is a node', () => {
      const tree = renderer
        .create(
          <SelectorButton checked={false} onClick={() => {}}>
            SelectorButton Text
          </SelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when checked type is primary', () => {
      const tree = renderer
        .create(
          <SelectorButton checked onClick={() => {}} type="primary">
            SelectorButton Text
          </SelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when checked type is secondary', () => {
      const tree = renderer
        .create(
          <SelectorButton checked onClick={() => {}} type="secondary">
            SelectorButton Text
          </SelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when is checkbox', () => {
      const tree = renderer
        .create(
          <SelectorButton
            checked={false}
            onClick={() => {}}
            selector="checkbox"
          >
            SelectorButton Text
          </SelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    describe('when Icon added', () => {
      it("hides icon for checkbox with size 'small'", () => {
        const tree = renderer.create(
          <SelectorButton
            checked={false}
            onClick={() => {}}
            selector="checkbox"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="small"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });

      it("hides icon for radio button size 'small'", () => {
        const tree = renderer.create(
          <SelectorButton
            checked={false}
            onClick={() => {}}
            selector="radio"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="small"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });

      it("displays icon for checkbox with size 'large'", () => {
        const tree = renderer.create(
          <SelectorButton
            checked={false}
            onClick={() => {}}
            selector="checkbox"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });

      it("displays icon for radio button with size 'large'", () => {
        const tree = renderer.create(
          <SelectorButton
            checked={false}
            onClick={() => {}}
            selector="radio"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });

      it('displays check mark for checked checkbox', () => {
        const tree = renderer.create(
          <SelectorButton
            checked
            onClick={() => {}}
            selector="checkbox"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });

      it('displays check mark for checked radio button', () => {
        const tree = renderer.create(
          <SelectorButton
            checked
            onClick={() => {}}
            selector="radio"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('onClick callback', () => {
    it('is invoked on click', () => {
      const spy = jest.fn();
      const wrapper = shallow(<SelectorButton checked={false} onClick={spy} />);

      wrapper.simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
