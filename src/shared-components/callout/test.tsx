import React from 'react';
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

      expect(container.firstElementChild).toMatchSnapshot();
    });
    it('renders callout with icon', () => {
      const { container } = render(
        <Callout icon={<NeckGlyph />}>
          Callout text with <strong>custom color</strong> and icon.
        </Callout>,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });
});
