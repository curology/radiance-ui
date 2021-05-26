import React from 'react';
import { primaryTheme } from 'src/constants/themes';
import { render } from 'src/tests/testingLibraryHelpers';

import { ProgressBar } from './index';

describe('<ProgressBar />', () => {
  describe('UI snapshot', () => {
    it('renders with default props', () => {
      const { container } = render(<ProgressBar status="loading" />);

      expect(container.firstElementChild).toMatchSnapshot();
    });

    it('renders with custom props', () => {
      const { container } = render(
        <ProgressBar
          status="loading"
          backgroundColor={primaryTheme.COLORS.error}
          barColor={primaryTheme.COLORS.info}
          height={5}
          loadingTime="30s"
          customProp="allows ..rest props"
        />,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });
});
