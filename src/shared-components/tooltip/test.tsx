import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { Tooltip } from './index';

describe('<Tooltip />', () => {
  describe('UI snapshot', () => {
    it('renders content and children', () => {
      const { container } = render(
        <Tooltip
          position="bottom"
          content="Tooltip Content"
        >
          Tooltip Trigger
        </Tooltip>,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });
});
