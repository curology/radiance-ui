import React from 'react';
import renderer from 'react-test-renderer';
import { primaryTheme } from 'src/constants/themes';
import { decorateWithThemeProvider } from 'src/tests/decorateWithThemeProvider';

import NeckGlyph from '../../svgs/glyphs/neck-glyph.svg';

import { Callout } from './index';

describe('<Callout />', () => {
  const DecoratedCallout = decorateWithThemeProvider(Callout);

  describe('UI snapshots', () => {
    it('renders a simple callout', () => {
      const component = renderer.create(
        <DecoratedCallout>
          Simple callout text. <strong>Bold text supported</strong>
        </DecoratedCallout>,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders callout with custom color and icon', () => {
      const component = renderer.create(
        <DecoratedCallout
          icon={<NeckGlyph width={40} height={40} />}
          color={primaryTheme.COLORS.primaryTint2}
        >
          Callout text with <strong>custom color</strong> and icon.
        </DecoratedCallout>,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
