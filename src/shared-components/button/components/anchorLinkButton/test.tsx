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

    it('passes down all valid button props to underlying button', () => {
      const label = 'Click me for more information';

      const { getByLabelText } = render(
        <AnchorLinkButton
          onClick={() => undefined}
          aria-label={label}
        >
          Click me
        </AnchorLinkButton>,
      );

      const button = getByLabelText(label);
      expect(button).toHaveTextContent('Click me');
    });
  });
});
