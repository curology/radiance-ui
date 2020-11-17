import React from 'react';
import { renderer } from 'src/tests/reactTestRendererHelpers';
import { primaryTheme } from 'src/constants/themes';

import { NeckGlyph } from '../../icons';

import { Callout } from './index';

describe('<Callout />', () => {
  describe('UI snapshots', () => {
    it('renders a simple callout', () => {
      const component = renderer.create(
        <Callout>
          Simple callout text. <strong>Bold text supported</strong>
        </Callout>,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders callout with custom color and icon', () => {
      const component = renderer.create(
        <Callout
          icon={<NeckGlyph width={40} height={40} />}
          color={primaryTheme.COLORS.primaryTint2}
        >
          Callout text with <strong>custom color</strong> and icon.
        </Callout>,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
