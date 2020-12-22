import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { Indicator } from './index';

describe('<Indicator />', () => {
  describe('UI snapshots', () => {
    it('renders the correct css with a text', () => {
      const { container } = render(<Indicator text="1" />);

      expect(container.firstElementChild).toMatchSnapshot();
    });

    it('renders the correct css with a number', () => {
      const { container } = render(<Indicator text={3} />);

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });
});
