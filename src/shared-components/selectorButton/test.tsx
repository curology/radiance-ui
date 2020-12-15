import React from 'react';
import { mount } from 'src/tests/enzymeHelpers';
import { renderer } from 'src/tests/reactTestRendererHelpers';

import { AcneOneGlyph } from '../../icons';

import { SelectorButton } from './index';

describe('<SelectorButton />', () => {
  describe('UI snapshots', () => {
    test('when children is undefined', () => {
      const tree = renderer
        .create(<SelectorButton checked={false} onClick={() => undefined} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when children is a node', () => {
      const tree = renderer
        .create(
          <SelectorButton checked={false} onClick={() => undefined}>
            SelectorButton Text
          </SelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when checked type is primary', () => {
      const tree = renderer
        .create(
          <SelectorButton checked onClick={() => undefined} type="primary">
            SelectorButton Text
          </SelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when checked type is secondary', () => {
      const tree = renderer
        .create(
          <SelectorButton checked onClick={() => undefined} type="secondary">
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
            onClick={() => undefined}
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
            onClick={() => undefined}
            selector="checkbox"
            icon={<AcneOneGlyph />}
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
            onClick={() => undefined}
            selector="radio"
            icon={<AcneOneGlyph />}
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
            onClick={() => undefined}
            selector="checkbox"
            icon={<AcneOneGlyph />}
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
            onClick={() => undefined}
            selector="radio"
            icon={<AcneOneGlyph />}
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
            onClick={() => undefined}
            selector="checkbox"
            icon={<AcneOneGlyph />}
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
            onClick={() => undefined}
            selector="radio"
            icon={<AcneOneGlyph />}
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
      const wrapper = mount(<SelectorButton checked={false} onClick={spy} />);

      wrapper.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    // eslint-disable-next-line jest/expect-expect
    it('Does nothing when no onClick is set', () => {
      const wrapper = mount(<SelectorButton checked={false} />);
      // Just check that no exception is thrown
      wrapper.simulate('click');
      wrapper.simulate('keypress', { key: 'Enter' });
    });

    it('is invoked when enter is pressed', () => {
      const spy = jest.fn();
      const wrapper = mount(<SelectorButton checked={false} onClick={spy} />);

      wrapper.simulate('keypress', { key: 'Enter' });
      expect(spy).toHaveBeenCalled();
    });
  });
});
