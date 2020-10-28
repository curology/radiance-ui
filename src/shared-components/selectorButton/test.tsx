import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import AcneOneGlyph from '../../svgs/glyphs/acne-one-glyph.svg';

import { SelectorButton } from './index';

describe('<SelectorButton />', () => {
  const DecoratedSelectorButton = decorateWithThemeProvider(SelectorButton);

  describe('UI snapshots', () => {
    test('when children is undefined', () => {
      const tree = renderer
        .create(
          <DecoratedSelectorButton checked={false} onClick={() => undefined} />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when children is a node', () => {
      const tree = renderer
        .create(
          <DecoratedSelectorButton checked={false} onClick={() => undefined}>
            SelectorButton Text
          </DecoratedSelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when checked type is primary', () => {
      const tree = renderer
        .create(
          <DecoratedSelectorButton
            checked
            onClick={() => undefined}
            type="primary"
          >
            SelectorButton Text
          </DecoratedSelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when checked type is secondary', () => {
      const tree = renderer
        .create(
          <DecoratedSelectorButton
            checked
            onClick={() => undefined}
            type="secondary"
          >
            SelectorButton Text
          </DecoratedSelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when is checkbox', () => {
      const tree = renderer
        .create(
          <DecoratedSelectorButton
            checked={false}
            onClick={() => undefined}
            selector="checkbox"
          >
            SelectorButton Text
          </DecoratedSelectorButton>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    describe('when Icon added', () => {
      it("hides icon for checkbox with size 'small'", () => {
        const tree = renderer.create(
          <DecoratedSelectorButton
            checked={false}
            onClick={() => undefined}
            selector="checkbox"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="small"
          >
            SelectorButton Text
          </DecoratedSelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });

      it("hides icon for radio button size 'small'", () => {
        const tree = renderer.create(
          <DecoratedSelectorButton
            checked={false}
            onClick={() => undefined}
            selector="radio"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="small"
          >
            SelectorButton Text
          </DecoratedSelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });

      it("displays icon for checkbox with size 'large'", () => {
        const tree = renderer.create(
          <DecoratedSelectorButton
            checked={false}
            onClick={() => undefined}
            selector="checkbox"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </DecoratedSelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });

      it("displays icon for radio button with size 'large'", () => {
        const tree = renderer.create(
          <DecoratedSelectorButton
            checked={false}
            onClick={() => undefined}
            selector="radio"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </DecoratedSelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });

      it('displays check mark for checked checkbox', () => {
        const tree = renderer.create(
          <DecoratedSelectorButton
            checked
            onClick={() => undefined}
            selector="checkbox"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </DecoratedSelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });

      it('displays check mark for checked radio button', () => {
        const tree = renderer.create(
          <DecoratedSelectorButton
            checked
            onClick={() => undefined}
            selector="radio"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </DecoratedSelectorButton>,
        );

        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('onClick callback', () => {
    it('is invoked on click', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DecoratedSelectorButton checked={false} onClick={spy} />,
      );

      wrapper.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('Does nothing when no onClick is set', () => {
      const wrapper = mount(<DecoratedSelectorButton checked={false} />);
      // Just check that no exception is thrown
      wrapper.simulate('click');
      wrapper.simulate('keypress', { key: 'Enter' });
    });

    it('is invoked when enter is pressed', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DecoratedSelectorButton checked={false} onClick={spy} />,
      );

      wrapper.simulate('keypress', { key: 'Enter' });
      expect(spy).toHaveBeenCalled();
    });
  });
});
