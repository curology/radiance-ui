import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { AnchorLinkButton } from './index';

describe('<AnchorLinkButton/>', () => {
  describe('UI snapshots to double-check regressions', () => {
    it('renders with props', () => {
      const { container } = render(
        <AnchorLinkButton onClick={() => undefined}>Click me</AnchorLinkButton>,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });
});
