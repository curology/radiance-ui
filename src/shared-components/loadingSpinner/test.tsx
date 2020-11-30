import React from 'react';
import { primaryTheme } from 'src/constants/themes';
import { render } from 'src/tests/testingLibraryHelpers';

import { LoadingSpinner } from './index';

describe('<LoadingSpinner />', () => {
  describe('UI snapshots', () => {
    it('renders the correct css with default props', () => {
      const { container } = render(<LoadingSpinner />);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the correct css with custom props', () => {
      const { container } = render(
        <LoadingSpinner
          bgColor={primaryTheme.COLORS.black}
          color={primaryTheme.COLORS.white}
          duration={4}
          size="20px"
          translateX="150px"
        />,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
