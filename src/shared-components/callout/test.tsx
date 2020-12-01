import React from 'react';
import { primaryTheme } from 'src/constants/themes';
import { render } from 'src/tests/testingLibraryHelpers';

import { NeckGlyph } from '../../icons';

import { Callout } from './index';

describe('<Callout />', () => {
  describe('UI snapshots', () => {
    it('renders a simple callout', () => {
      const { container } = render(
        <Callout>
          Simple callout text. <strong>Bold text supported</strong>
        </Callout>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders callout with custom color and icon', () => {
      const { container } = render(
        <Callout
          icon={<NeckGlyph width={40} height={40} />}
          color={primaryTheme.COLORS.primaryTint2}
        >
          Callout text with <strong>custom color</strong> and icon.
        </Callout>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
