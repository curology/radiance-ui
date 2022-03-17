import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { Chip } from './index';

describe('<Chip />', () => {
  describe('UI snapshots', () => {
    it('renders the correct css and text', () => {
      const { container } = render(
        <Chip
          status="success"
          text="Success"
        />,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });
});
